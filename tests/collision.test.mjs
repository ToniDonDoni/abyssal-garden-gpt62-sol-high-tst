import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const page = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const found = page.match(/\/\/ COLLISION_PHYSICS_START\n([\s\S]*?)\/\/ COLLISION_PHYSICS_END/);
assert.ok(found, 'The single-file game must contain the collision helpers');
const { terrainHeight, cameraBlocked, resolveSwimMovement, COLLISION_ROCKS, SWIM_RADIUS } =
 runInNewContext('(() => { ' + found[1] + '\nreturn {terrainHeight,cameraBlocked,resolveSwimMovement,COLLISION_ROCKS,SWIM_RADIUS}; })()');
const almost = (actual, expected, delta = 1e-6) =>
 assert.ok(Math.abs(actual - expected) < delta, String(actual) + ' != ' + String(expected));

test('terrain collision follows procedural height and reserves camera clearance', () => {
 const x = 30, z = 10;
 const floor = terrainHeight(x, z);
 assert.ok(floor > -32 && floor < -10);
 assert.equal(cameraBlocked(x, floor + .1, z), true);
 assert.equal(cameraBlocked(x, floor + 5, z), false);
});

test('descending toward a sloping terrain wall stops without teleporting up', () => {
 const start = [0, -15, 10];
 assert.equal(cameraBlocked(...start), false);
 const end = resolveSwimMovement(start, [80, 0, 0]);
 assert.ok(end[0] > 5 && end[0] < 45);
 almost(end[1], start[1]);
 assert.equal(cameraBlocked(...end), false);
});

test('swept substeps stop against a floating rock even with a large movement vector', () => {
 const rock = COLLISION_ROCKS.find(rock => rock.kind === 3 && rock.x < 0);
 assert.ok(rock);
 const start = [rock.x + rock.rx + 2, rock.y, rock.z];
 assert.equal(cameraBlocked(...start), false);
 assert.equal(cameraBlocked(rock.x, rock.y, rock.z), true);
 const end = resolveSwimMovement(start, [-10, 0, 0]);
 assert.ok(end[0] > rock.x);
 assert.ok(end[0] < start[0]);
 assert.equal(cameraBlocked(...end), false);
});

test('solid ship, monument and stone arch cannot be traversed', () => {
 assert.equal(cameraBlocked(-16, -22, -34), true);
 assert.equal(cameraBlocked(22, -25, -49), true);
 assert.equal(cameraBlocked(-75, 10, -92), false);
 assert.equal(cameraBlocked(-55, 9, -92), true);
});

test('world bounds stop ascent and allow diagonal sliding', () => {
 assert.equal(cameraBlocked(0, 23, 40), true);
 assert.equal(cameraBlocked(93, 0, 90), true);
 assert.equal(cameraBlocked(0, -33, 40), true);
 const top = resolveSwimMovement([0, 20, 40], [0, 10, 0]);
 assert.ok(top[1] <= 22.5 && top[1] > 22);
 const edge = resolveSwimMovement([91.6, 0, 90], [10, 0, -8]);
 assert.ok(edge[0] <= 92 && edge[2] < 89);
 assert.equal(cameraBlocked(...edge), false);
});

test('unobstructed motion is unchanged and motionless input stays still', () => {
 const start = [0, -12, 43];
 assert.equal(cameraBlocked(...start), false);
 const end = resolveSwimMovement(start, [.24, .15, -.17]);
 almost(end[0], start[0] + .24);
 almost(end[1], start[1] + .15);
 almost(end[2], start[2] - .17);
 const idle = resolveSwimMovement(start, [0, 0, 0]);
 idle.forEach((value, i) => almost(value, start[i]));
 assert.ok(SWIM_RADIUS > 0);
});

test('movement path calls resolver and packaged preview matches the game', () => {
 assert.match(page, /resolveSwimMovement\(\[x,\s*y,\s*z\]/);
 const preview = readFileSync(new URL('../preview/swim-collisions.html', import.meta.url), 'utf8');
 assert.equal(preview, page);
});
