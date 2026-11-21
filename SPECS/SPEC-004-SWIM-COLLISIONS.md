# SPEC-004: Solid Obstacle Collision for Swimming

**Status:** Implemented in an unmerged review branch

## 1. Problem and current state

- Movement in the desktop and touch camera updates x/y/z directly without testing scene geometry.
- The swimmer can cross the procedurally drawn terrain, canyon slopes, rock formations and built structures.
- Rectangular world bounds prevent distant escape but do not prevent clipping through nearby objects.
- SPEC-003 touch behavior and existing desktop controls must remain intact.

## 2. Required state

- **C01: Geometry correspondence.** Collision heights reproduce the GPU terrain function; solid rocks and large stone/ship structures have conservative body-shaped obstacles. Animated fish and soft plants remain nonblocking.
- **C02: Camera body.** Collision tests reserve clearance around the camera, instead of treating it as a dimensionless point.
- **C03: Traversal.** Before applying each movement, test the candidate pose. Break long movements into short substeps to prevent tunneling. Reject blocked movement components and permit free-axis sliding; do not lift the player above a mountain automatically.
- **C04: Controls and boundaries.** WASD, Q/E, Shift and touch thumbsticks keep their current mapping and speeds. Retain world bounds and the upper water limit. Reset returns to the existing safe starting pose.
- **C05: Self-contained preview.** The root index.html stays the canonical runnable page. Ship a byte-for-byte standalone copy at preview/swim-collisions.html for PR review; neither requires a build or external assets.

## 3. Acceptance criteria

- [x] Steep terrain cannot be crossed at a fixed depth by swimming horizontally into a higher slope.
- [x] A large single movement cannot tunnel through a floating stone.
- [x] The ship, monument and sampled stone arches reject overlapping camera positions.
- [x] Ascending and lateral travel remain within the existing limits.
- [x] Diagonal movement against an obstruction keeps the unobstructed component.
- [x] Safe starting movement and stationary input are unchanged.
- [x] Automated Node collision regression tests run on pull requests.
- [x] The PR contains an up-to-date independent HTML copy of the playable scene.
- [ ] Manually inspect browser/WebGPU rendering and the exact feel of hull and irregular rock edges on desktop and phone.

## 4. Analysis

- The world is GPU-procedural, so a physics-engine mesh collider is not available on the CPU.
- Recreating solid terrain and approximating large objects is practical for this single-file experience. The CPU/GPU descriptions must remain aligned when art geometry changes.
- Conservative rounded/box-like colliders can prevent some visually close passes. This favors stopping obvious clipping over pixel-perfect geometric contact.
- Exact mesh collision and per-vertex GPU readback would cost additional complexity and synchronization; do not introduce that for this change.

## 5. Proposed solution

- Keep deterministic collision math in the inline JavaScript module to preserve file:// operation.
- Match the ground heightfield and rock seeds from WGSL, precompute static rock colliders, and approximate ship, arches and stone monument in their existing local coordinate systems.
- Use a bounded 0.35-unit movement step and 0.8-unit camera radius with axis-wise sliding when blocked.
- Extract the collision helper block only in Node tests for deterministic tests without requiring WebGPU.
- Preserve the rest of the rendering, controls and audio code unchanged.

## 6. ToDo

- [x] Add CPU-side detection and substep movement resolution.
- [x] Add automated obstacle and movement regression tests.
- [x] Register tests in npm scripts and pull-request CI.
- [x] Package the identical one-file preview.
- [ ] Confirm gameplay visually and refine conservative collision envelopes if necessary.
