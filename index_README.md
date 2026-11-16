# index.html: Provenance and Handoff

## Purpose

This directory contains the **single-file procedural WebGPU Abyssal Garden game**. The current `index.html` is an interactive, freely navigable 3D prototype, **not** a flat SVG slideshow. It combines an existing procedural WebGPU game with art direction from the separate **Kuindzhi × Lalique V3** visual study.

**Current status:** The HTML is a checkpoint for the next agent. Its **soft mint halo and underwater light shafts have not been demonstrated to match the V3 SVG in actual rendered gameplay**. The next tasks and proof requirements are in [index_TODO.md](index_TODO.md). Do not describe this checkpoint as visually verified.

## Original inspiration and brief

- **Original inspiration prompt:** [Noniv/abyssal-garden, `prompt.txt`](https://github.com/Noniv/abyssal-garden/blob/main/prompt.txt).
- **Source of the navigable WebGPU game:** [ToniDonDoni/abyssal-garden-gpt62-sol-high-tst](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst), particularly the original [`feat/procedural-webgpu-abyssal-garden` implementation](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/feat/procedural-webgpu-abyssal-garden/index.html).
- **Current page:** [`index.html`](index.html) in the `feat/v3-soft-light-verification-handoff` branch.

The **external prompt is a design/technical inspiration**, not a claim that this file was copied directly from Noniv's repository. Its brief asks for a browser-based procedural fantasy underwater scene using **WebGPU**, no Three.js/Babylon.js or downloaded model/texture assets, one self-contained HTML file, a free-flying camera, animated sea life, a sunken ship, and a whale-fluke sculpture.

Its original **verification instructions** ask for six fixed camera poses judged by an independent visual critic, a recorded fly-through, and GPU timing evidence. Its original target is Windows 11 / Chrome 157 / RTX 5070 Ti at 2560×1440, with average GPU frame time at most 11 ms and no frame beyond 16.7 ms during a scripted 60-second traversal. These are requirements **from the source prompt**, not measured results or guarantees for the current prototype.

## Visual art direction and traceability

The game should implement the visual concept defined in **adavilazil**, rather than treating the exported SVG as a flat fullscreen texture:

- [**SPEC-009 V3**: artistic goal, selected methods, palette, composition and acceptance criteria](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md)
- [**Editable V3 SVG**: canonical still-image reference](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg)
- [**V3 PNG**: reference image for side-by-side inspection](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.png)
- [**V3 scene map**: object/layer/material mapping for JavaScript](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-SCENE-MAP.md)
- [**V3 verification v2**: 17 pass / 1 partial for the SVG only](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-VERIFICATION-v2.md)
- [**SPEC-TEMPLATE 2.0.0**](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/SPEC-TEMPLATE.md), [Color Rules 1.0.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COLOR-RULES.md), [Composition Rules 1.0.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COMPOSITION-RULES.md).

**Kuindzhi-derived:** huge blue-black canyon, one central near-white mint emitter, diffuse teal illumination fading through water, negative space and strong depth.

**Lalique-derived:** selected opalescent marine organisms with bounded teal/violet/rose enamel and narrow gold filigree; rock and the wreck remain matte. The light must remain more prominent than decorative accents.

**Visual constraint:** The inherited inspiration prompt asks for *dense towering kelp*, but this specific V3 art direction preserves **an open central view**, with vegetation concentrated near the canyon walls. V3 composition takes priority when those instructions conflict.

## How this particular `index.html` was made

1. Started from this repository's **procedural WebGPU implementation**, retaining 3D geometry, WGSL shaders, the render loop, and free-camera controls.
2. Adopted the V3 SVG and scene map as the new **artistic target**, not as a raster background. Adjusted the colors, the placement/density of organisms and fish, and the ship/fluke/reef details toward that target.
3. Iterated on the beacon: reduced its solid white core, experimented with a radial mint glow and underwater rays, then tried a softer lighting implementation.
4. Saved the most recent single-file HTML in this branch as a **handoff checkpoint**. User-provided screenshots of previous revisions showed an overly sharp white orb, a small halo, and then a later revision with missing/weak rays and glow. These observations concern earlier screenshots and **do not constitute a verified screenshot of this exact checkpoint**.
5. During the earlier attempt to test the page, Chromium navigation policies prevented an actual GPU-rendered screenshot. Static code review and movement tests **must not be represented as visual verification**.

## Existing code entry points

- **WebGPU + WGSL:** the `shader` string, `background` shader, and `descriptors` draw list inside `index.html`.
- **Beacon world position:** `beacon() = (0, -7, -46)`. Opening camera pose: `START_POSE = [0, -12, 43, 0.012, 0.025]`.
- **Core:** `KIND == 27`; **underwater conical rays:** `KIND == 28`; **halo billboard:** `KIND == 34`; the background shader also contains a directional glow.
- **Crucial current-code fact:** **both KIND 28 and KIND 34 are in the draw list**. Do not assume their absence is the bug. Their world-space sizing, compositing, depth testing, visual strength, camera projection and interaction with background glow must be *tested*.
- **Input:** WASD to move, mouse to look after pointer lock, Q/E down/up, Shift to accelerate, R to reset, Esc to release cursor, H to toggle HUD. A `window.__abyssal` pose setter/getter exists for deterministic capture.

## Next action

Read [index_TODO.md](index_TODO.md). Make the light and rays match the SVG without breaking movement or the rest of the underwater scene; render **real WebGPU screenshots** of the running page and record separate versioned verification evidence. Do **not** silently mark unobserved results as pass.
