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

## Development timeline (16 November 2026, UTC)

The timestamps below come from Git commits, not a time tracker.

1. **First implementation, 17:59:38**: [`a6b93b9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a6b93b9cabaebd905ddd77180a4941a5cf64b065) added the self-contained procedural WebGPU scene. This first version **did not render** in Chrome because the WGSL shader used an unsupported `mod()` call.
2. **Shader fix and automated checks, 18:09:34 to 18:10:04**: [`10c36e9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/10c36e9e2d55cae436c408fcb16e2763bc623d13) fixed the WGSL expression; [`9a4618d`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/9a4618d246b00cc493d3bf9cc70d58c07c623a39) added JS/WGSL validation; [`a0ba791`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a0ba7919b84607f80aa1b589bd6621f7e2ea832a) added GitHub Actions checks for pushes and PRs. The validation CI passed, but that is not a visual rendering test.
3. **Documentation, 18:20:04**: [`8f376e4`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/8f376e4d34162b2b55e423c18ba813fae993ba22) added this README with the project overview, technologies, and controls.

**Elapsed Git history:** 20 minutes 26 seconds from the first scene commit to the documentation commit. This is the span between commits, **not** a measured total of hands-on development time.
