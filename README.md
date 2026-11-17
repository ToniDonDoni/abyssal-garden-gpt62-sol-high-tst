# Abyssal Garden

A procedural fantasy underwater world you can explore with a free-flying camera. The indigo scene contains swaying kelp, enamel coral, a sunken ship, manta rays, fish, a stone whale-fluke monument, diffuse light and underwater fog. The game generates music live from the four chords and synth timbre of the Java4Shell motion graphic. Chime notes, timing, dynamics and stereo position vary as you explore.

## Inspired by

The [original Abyssal Garden prompt](https://github.com/Noniv/abyssal-garden/blob/main/prompt.txt) by [Noniv](https://github.com/Noniv).

## Prerequisites

- **Development environment:** ChatGPT with GitHub integration for the original prototype; **Codex desktop** for the artistic-style refactoring, indigo transfer and procedural-audio implementation.
- **To run:** A recent Chrome browser with WebGPU and hardware acceleration enabled.
- **To run code checks locally (optional):** Node.js 22, HTMLHint and Naga CLI.

## Technologies

- **WebGPU + WGSL**: GPU-rendered procedural geometry, lighting, water effects, and animation.
- **HTML5, CSS3, vanilla JavaScript**: one readable HTML file containing the scene, UI and camera controls.
- **Web Audio API**: stereo synth voices generated in the browser without audio files or runtime downloads.
- **4x MSAA**: edge anti-aliasing.
- **Node.js 22 + Naga CLI**: JavaScript syntax and WGSL shader validation.
- **GitHub Actions**: automated checks on pushes and pull requests.

No Three.js, Babylon.js, other engines, external models, or texture files.

## Run

Open the root `index.html` directly in a recent WebGPU-enabled Chrome browser. No build step is required.

**Controls:** WASD to move, mouse to look, Q to descend, E to ascend, Shift to accelerate, R to reset, Esc to release the mouse and pause music, H to toggle the HUD, **M to mute/unmute**. Music starts after entering the scene and resumes from the same position after a pause.

A small `Version 2.0` label is visible at the bottom of the first screen. This label is maintained in `index.html`.

## Current specification and reference

- [Indigo scene and soundtrack specification](SPECS/SPEC-001-INDIGO-WATER-AUDIO.md)
- [Supplied indigo color reference](SPECS/REFERENCES/SPEC-001-INDIGO-WATER-AUDIO-INDIGO.png)
- [Rendered observations and historical procedural-audio review](SPECS/SPEC-001-INDIGO-WATER-AUDIO-REVIEW.md)

Earlier handoff notes associated with this specification are grouped under [SPECS/ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/](SPECS/ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/). The page runs without installed packages or a server.

## Code checks

The action checks the root `index.html` directly: HTMLHint lints the markup, Node checks the inline JavaScript, and Naga compiles all three WGSL modules. To run the checks locally:

```sh
npm ci --ignore-scripts
npm run lint
npm run check
```

The shader check requires Naga CLI. There is no build script or generated HTML copy.

## Development effort (approximate)

1. **Initial implementation: ~20 minutes.** Built the self-contained procedural underwater WebGPU scene, including free camera, animated wildlife and scenery. The first version did not render because WGSL does not support the `mod()` call used in the shader. Commit: [`a6b93b9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a6b93b9cabaebd905ddd77180a4941a5cf64b065).
2. **Shader fix and automated validation: ~10 minutes.** Replaced the unsupported WGSL expression, added a JavaScript/WGSL validator, and configured GitHub Actions to run on pushes and pull requests. Commits: [`10c36e9`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/10c36e9e2d55cae436c408fcb16e2763bc623d13), [`9a4618d`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/9a4618d246b00cc493d3bf9cc70d58c07c623a39), [`a0ba791`](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/commit/a0ba7919b84607f80aa1b589bd6621f7e2ea832a). CI passed; GPU rendering has not been independently verified.

**Estimated total for the two development iterations: ~30 minutes.** These are rough effort estimates, not measurements derived from commit timestamps.

## Artistic-style refactoring in Codex

**Approximate duration: 6 hours.** Artistic-style refactoring, visual iteration, indigo transfer and procedural-audio implementation were carried out in **Codex desktop**.
