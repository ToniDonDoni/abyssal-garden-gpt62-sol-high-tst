# Abyssal Garden

A procedural fantasy underwater world you can explore with a free-flying camera. Features swaying kelp, glowing reefs, rock formations, a sunken ship, manta rays, fish, bubbles, caustics, and underwater fog.

## Technologies

- **WebGPU + WGSL**: GPU-rendered procedural geometry, lighting, water effects, and animation.
- **HTML5, CSS3, vanilla JavaScript**: single-file scene, UI, and camera controls.
- **4x MSAA**: edge anti-aliasing.
- **Node.js 22 + Naga CLI**: JavaScript syntax and WGSL shader validation.
- **GitHub Actions**: automated checks on pushes and pull requests.

No Three.js, Babylon.js, other engines, external models, or texture files.

## Run

Open `index.html` in a recent WebGPU-enabled Chrome browser.

**Controls:** WASD to move, mouse to look, Q/E up/down, Shift to accelerate, Esc to release the mouse, H to toggle the HUD.

**Validate locally:** `node tools/validate.mjs` (requires the `naga` CLI). The validator is development tooling; the scene itself needs only `index.html`.
