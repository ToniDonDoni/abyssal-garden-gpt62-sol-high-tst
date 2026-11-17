import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scriptTags = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
if (scriptTags.length !== 1 || !/\btype=["']module["']/.test(scriptTags[0][1])) {
  throw Error('Expected exactly one inline module script in index.html');
}
const js = scriptTags[0][2];
const shaderNames = ['shader', 'background', 'atmosphere'];
const shaderLiterals = [...js.matchAll(/\bconst\s+(shader|background|atmosphere)\s*=\s*\/\*\s*wgsl\s*\*\/\s*\x60([\s\S]*?)\x60\s*;/g)];
if (shaderLiterals.length !== shaderNames.length) {
  throw Error('Expected three inline WGSL literals; found ' + shaderLiterals.length);
}
const sources = new Map(shaderLiterals.map((match) => [match[1], match[2]]));
if (!shaderNames.every(name => sources.has(name))) throw Error('Missing or duplicate WGSL shader module');

const dir = mkdtempSync(join(tmpdir(), 'abyssal-wgsl-'));
try {
  const scriptFile = join(dir, 'scene.mjs');
  writeFileSync(scriptFile, js);
  console.log('Checking inline JavaScript syntax...');
  execFileSync(process.execPath, ['--check', scriptFile], { stdio: 'inherit' });
  if (process.argv.includes('--syntax-only')) {
    console.log('JavaScript syntax OK (WGSL validation explicitly skipped).');
  } else {
    for (const name of shaderNames) {
      const code = sources.get(name);
      if (!code || code.includes('$' + '{')) {
        throw Error('Missing or interpolated WGSL shader: ' + name);
      }
      const file = join(dir, name + '.wgsl');
      writeFileSync(file, code);
      console.log('Validating WGSL ' + name + ' via Naga...');
      execFileSync('naga', [file], { stdio: 'inherit' });
    }
    console.log('JavaScript syntax and all WGSL shaders passed validation.');
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
