# Abyssal Garden

A procedural fantasy underwater world you can explore with a free-flying camera. Features swaying kelp, glowing reefs, rock formations, a sunken ship, manta rays, fish, bubbles, caustics, and underwater fog.

## Inspired by

The [original Abyssal Garden prompt](https://github.com/Noniv/abyssal-garden/blob/main/prompt.txt) by [Noniv](https://github.com/Noniv).

## Prerequisites

- **Development environment:** ChatGPT 6.1 SOL, High reasoning, in ChatGPT with GitHub integration.
- **To run:** A recent Chrome browser with WebGPU and hardware acceleration enabled.
- **To validate locally (optional):** Node.js 22 and Naga CLI.

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

## Development effort (approximate)

1. **Initial implementation: ~20 minutes.** Built the self-contained procedural underwater WebGPU scene, including free camera, animated wildlife and scenery. The first version did not render because WGSL does not support the `mod()` call used in the shader. Commit: [`a6b93b9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a6b93b9cabaebd905ddd77180a4941a5cf64b065).
2. **Shader fix and automated validation: ~10 minutes.** Replaced the unsupported WGSL expression, added a JavaScript/WGSL validator, and configured GitHub Actions to run on pushes and pull requests. Commits: [`10c36e9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/10c36e9e2d55cae436c408fcb16e2763bc623d13), [`9a4618d`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/9a4618d246b00cc493d3bf9cc70d58c07c623a39), [`a0ba791`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a0ba7919b84607f80aa1b589bd6621f7e2ea832a). CI passed; GPU rendering has not been independently verified.

**Estimated total for the two development iterations: ~30 minutes.** These are rough effort estimates, not measurements derived from commit timestamps.
