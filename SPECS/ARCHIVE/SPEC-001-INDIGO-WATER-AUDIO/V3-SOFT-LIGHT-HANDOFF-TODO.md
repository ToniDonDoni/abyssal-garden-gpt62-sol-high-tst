> Historical input for [SPEC-001-INDIGO-WATER-AUDIO](../../SPEC-001-INDIGO-WATER-AUDIO.md). This is the earlier soft-light handoff that the current specification supersedes. Statements below describe that checkpoint, not the current requirements.

# SPEC: index.html V3 WebGPU Light Fidelity and Visual Verification

## Versions

- **Spec Template:** [2.0.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/SPEC-TEMPLATE.md)
- **Skills Used:** [Explore Visual Styles 2.4.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/skills/EXPLORE-VISUAL-STYLES.md) for the **original visual reference**; no new implementation-specific skill is claimed.
- **Rules Used:** [Color Rules 1.0.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COLOR-RULES.md), [Composition Rules 1.0.0](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COMPOSITION-RULES.md)
- **Source artistic specification:** [SPEC-009 V3](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md)
- **Primary visual reference:** [V3 editable SVG](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg) and [V3 raster PNG](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.png)
- **Scene decomposition:** [V3 scene map](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-SCENE-MAP.md)
- **Prior SVG-only assessment:** [V3 VERIFICATION-v2](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-VERIFICATION-v2.md) (does **not** verify the WebGPU game)
- **Original inspiration:** [Noniv/abyssal-garden/prompt.txt](https://github.com/Noniv/abyssal-garden/blob/main/prompt.txt)
- **Prototype history:** [index_README.md](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index_README.md)
- **Implementation baseline:** [index.html](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index.html) in this feature branch, checked-in checkpoint `b97271a3a0f14bb17ec9c79769d5ff2ebe2c395a`

## 1. Problem and Current State

The underwater **WebGPU game runs as a free-camera 3D scene**, but its illumination has not been proven to reproduce the agreed **Kuindzhi × Lalique V3 SVG**. User-provided screenshots of prior builds showed either a sharp, opaque-looking white beacon with a small halo and hard-edged green cone, or a bright point with little/no perceptible halo and rays. At least one revision visually lost the intended underwater light volume.

The currently committed `index.html` contains **multiple lighting implementations**: a beacon core (`KIND 27`), beam geometry (`KIND 28`), a radial halo billboard (`KIND 34`) and a separate directional glow in the background shader. **KIND 28 and 34 are already listed in `descriptors`.** Their inclusion is a code fact, not proof that they contribute visibly in the composed frame.

Earlier test attempts could check JavaScript and some input logic, but **could not successfully capture an actual WebGPU frame** in that restricted testing browser. Do not state that the current rendering passed any visual criterion until screenshots from a real WebGPU execution are inspected.

## 2. Required State

### Functional outcome

Retain the existing **single-file, procedural, navigable WebGPU Abyssal Garden game**. Players can move freely through a dark underwater canyon and explore the shipwreck, whale-fluke monument, manta rays, fish, kelp and original enamel coral. Changes must not flatten the game into a background SVG, remove procedural scene objects, or break free-camera navigation.

### Artistic concept

The world conveys quiet wonder, monumental depth and concealed jewelled underwater life. The **same Kuindzhi × Lalique V3 visual language** must hold up from the initial camera pose and during movement.

### Selected artistic methods and combination

- **Kuindzhi:** large dark navy environment; a **single** concentrated near-white mint light near the visual center on the initial pose; broad diffuse water illumination with soft atmospheric beams that fade naturally, not a hard white disk or triangular overlay.
- **Lalique:** local opalescent organic forms with restrained teal/violet/rose enamel cells, thin gold filigree and sparse pearl accents, separated visibly from matte wood/stone.
- **Combination:** the global light controls hierarchy across the 3D scene, with luminous decorative matter strictly secondary and no separate competing glow.

### Color solution

The light should have a **tiny near-white/mint core**, a distinctly visible **soft mint inner halo**, a much wider **low-opacity teal outer atmosphere**, and underwater beams with feathered boundaries. As a **reference starting point at approximately 900 px image height**, compare a core around 5-7 px, stronger mint region around 80 px and outer haze extending roughly 200 px; these are **visual targets in a comparable camera composition**, not mandatory world-unit radii or fixed sizes during camera motion. Prefer perceptual similarity to the reference over a literal pixel match.

The world outside the local light volume remains predominantly `#02091B` / `#092338` navy; accented enamel colors do not overpower the beacon. No scene-wide cyan wash replaces local volumetric illumination.

### Composition solution

With `START_POSE` as the default viewing pose, the unique beacon is near the **center (about 50% width / 43% height)**, surrounded by open dark water and canyon silhouettes that lead toward it. The ship, monument and living organisms stay discoverable while swimming; foreground vegetation must not obstruct the entire centerline.

### Expected deliverables

An updated **`index.html`**, genuine **GPU-rendered screenshots** with camera-pose metadata, an actual short fly-through capture, separate versioned **`index_TODO-VERIFICATION-v1.md`**, and measurable performance/implementation observations. Retain the one-file WebGPU scene as the runtime deliverable; test outputs and reports live alongside it, not embedded in its source.

## 3. Acceptance Criteria

### Lighting and stylistic fidelity

- [ ] **JS-AC01 [M1, darkness]:** At the opening pose, the canyon remains mostly blue-black and reads as a deep underwater space; no broad turquoise background overexposure.
- [ ] **JS-AC02 [M2, focal uniqueness]:** One near-white mint nucleus is visibly brighter than all other subjects. No large opaque white circular lamp or competing emitter appears.
- [ ] **JS-AC03 [M2, halo]:** The beacon shows a clearly visible soft mint inner halo and a wider translucent teal halo fading smoothly to darkness. The outer atmosphere remains detectable in a full-frame screenshot, not only when zoomed in.
- [ ] **JS-AC04 [M2, rays]:** At least one connected underwater beam is visible from the beacon and fades progressively with distance; beam boundaries do not form an obvious hard-edged solid green triangle.
- [ ] **JS-AC05 [M2, occlusion]:** Glow/rays behave coherently as the camera moves; nearby cliffs/objects occlude appropriate parts of the volumetric light without an additive overlay shining unnaturally through them.
- [ ] **JS-AC06 [C1-C4]:** Dark water, cool mint light, localized teal/violet/rose enamel and narrow gold filigree retain the order **light > enamel > gold** as visible focal hierarchy.
- [ ] **JS-AC07 [P1-P4]:** The opening view presents the focal region near `(0.50, 0.43)`, a coherent path through the canyon, clear depth planes and dark negative space.
- [ ] **JS-AC08 [M3-M5]:** Selected coral/flora retains visible bounded enamel-like color variations and small gold veins; matte ship and stone do not adopt jewellery-like gloss.
- [ ] **JS-AC09 [P5, recognizable subjects]:** Shipwreck, stone whale-fluke, manta, fish and canyon remain discoverable at relevant camera poses without overpowering vegetation or fish-scale artifacts. Note the V3 SVG's pre-existing partial whale-fluke recognition issue rather than silently claiming it solved.

### Functionality and regression

- [ ] **JS-AC10 [navigation]:** Mouse pointer lock/look, WASD, Q/E, Shift, R, Esc and H behave as documented. A scripted pose can be set and read consistently via `window.__abyssal` for repeatable captures.
- [ ] **JS-AC11 [GPU correctness]:** Real Chrome WebGPU initialization and WGSL/pipeline creation succeed; no uncaptured GPU validation errors, shader compilation diagnostics, device losses or JavaScript exceptions during the test fly-through.
- [ ] **JS-AC12 [scene stability]:** All existing 3D object categories, animation, water surface/caustics, depth cues and HUD still appear/behave as intended; no new missing draw calls, invisible light layers, depth-order artifacts, major pop-in or flickering.
- [ ] **JS-AC13 [responsive framing]:** At least 3:2 and 16:9 desktop viewports preserve the central focus; if mobile/narrow aspect is supported, confirm the beacon is visible and navigation remains usable or document limitations explicitly.
- [ ] **JS-AC14 [delivery]:** The playable result remains a standalone `index.html`, using WebGPU and procedural geometry without Three.js/Babylon.js or external asset downloads. Report source-file size and minified size separately, rather than guessing.

### Evidence and performance

- [ ] **JS-AC15 [actual visual review]:** Capture **six fixed gameplay camera poses** at known position/yaw/pitch using real Chrome WebGPU, plus a short fly-through recording. An independent visual reviewer sees the *rendered images/video* without seeing the implementation code or developer's reasoning, and reports concrete issues with severity. Record fixes and repeated captures until nothing above **minor** remains, or explicitly report unresolved blockers.
- [ ] **JS-AC16 [SVG comparison]:** Compare the opening gameplay frame side-by-side with the actual [V3 SVG reference](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg) at a similar framing and document differences in core size, halo spread, beam softness, brightness, palette, negative space and focal placement. Pixel-perfect identity is **not** required across 2D versus 3D media.
- [ ] **JS-AC17 [performance gate]:** Record GPU timestamps (where supported) and frame-time samples for the **60 s scripted fly-through**; include average, p99 and max plus hardware/browser, resolution and methodology. The **original external prompt's** target is 2560×1440 at native resolution, average GPU time ≤11 ms and **no frame >16.7 ms** on its stated target machine. If this machine and instrumentation are unavailable, mark the original target **NOT VERIFIED**, not PASS.
- [ ] **JS-AC18 [verification separation]:** Save criterion statuses, direct screenshots/video evidence and limitations in the separate versioned report `index_TODO-VERIFICATION-v1.md`, not in this specification. No claim of full acceptance without real rendered evidence.

## 4. Analysis

**Known current-code facts:** `beacon()` returns world position `(0,-7,-46)`; `START_POSE` is `[0,-12,43,0.012,0.025]`. The main WGSL shader defines `KIND 27` (tiny nucleus), `KIND 28` (cone geometry) and `KIND 34` (camera-facing Gaussian billboard). All three are included in `descriptors`. The background shader also computes a power-of-direction-dot glow; opaque geometry draws over that full-screen pass.

**Likely investigation areas, NOT established root causes:** halo world-unit radius becoming too small in projection; depth-testing and draw order hiding a billboard; transparent blend strength too low against the actual dark scene; background-only glow occluded by scenery; beam opacity/geometry producing a visible hard triangular border; multiple independently calculated glows not matching the same beacon and view.

Neither static WGSL validity nor the presence of a draw descriptor establishes that the light was perceptually visible on the user's GPU. The browser-testing environment previously reported a policy-related navigation restriction; **that limitation is not proof that WebGPU visual testing is impossible in a properly configured environment**.

The original Noniv prompt prioritizes visual quality, stable frame pacing and small size; the V3 reference clarifies that an **open central composition** takes priority over making the entire view a dense kelp thicket.

## 5. Proposed Solution

### Artistic methods and light treatment

**L1. Soft emitter:** Keep one very small mint nucleus rather than a broad opaque sphere. Use the V3 SVG's compact brightest center as the perceptual reference. Avoid white clipping that hides gradation.

**L2. Visible atmospheric halo:** Represent the near and far glow as smooth radial attenuation around the **projected 3D beacon**, with carefully tuned brightness and scale for the default pose. The halo must remain attached to the source as the camera moves, not to a screen corner. Use depth-aware compositing or an appropriate volumetric approximation so foreground geometry occludes it sensibly.

**L3. Feathered rays:** Use a visible beam volume that tapers and diffuses through water, without a hard boundary. Balance beam brightness with the halo; it must not become a separate bright triangle. Evaluate it at multiple camera positions and distances.

**L4. Maintain color/composition:** Preserve blue-black ambient water, central negative space, readable atmospheric depth and local opalescent marine organisms. Use [Color Rules §§1, 5, 6](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COLOR-RULES.md) for contextual contrast, restricted saturation and light-as-environment, and [Composition Rules §§2, 3, 4, 9](https://github.com/ToniDonDoni/adavilazil/blob/feat/abyssal-garden-kuindzhi-lalique/engineering/COMPOSITION-RULES.md) for paths, focus, depth and weight.

### Implementation and verification approach

**V1. Inspect before altering:** Review `background`, `vs`/`fs` handling of `KIND 27/28/34`, the `descriptors` list, transparent blending, depth, draw ordering, view/projection, and the initial pose. Instrument render errors rather than making an unverified guess that a branch is missing.

**V2. Render in a secure browser origin:** Serve the page from a trusted local HTTP origin (or a permitted HTTPS test host), use a WebGPU-capable GPU or a properly configured Chrome/SwiftShader path, and capture real screenshots at deterministic poses. If the environment cannot render WebGPU, **stop and report the blocker**; do not replace screenshots with code inspection or a Canvas imitation.

**V3. Iterate on measured visual differences:** Tune core, halo, fog and beams as separate effects while keeping their shared world-space light position. Re-capture the opening pose after each change and review additional close/far/side poses to detect overglow and disappearing rays.

**V4. Separate review and evidence:** Ask an independent visual reviewer to assess *only* rendered output and movement recording, followed by a separate technical pass for shader diagnostics, navigation, stability and frame-time data. Preserve before/after captures with build identifier and exact camera pose.

## 6. ToDo

- [ ] Review `index.html` and [index_README.md](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index_README.md) to understand the procedural engine, provenance, user feedback and constraints.
- [ ] Establish and document a **repeatable actual WebGPU render** in Chrome; confirm rendering rather than just passing JavaScript syntax.
- [ ] Capture baseline frames, including the opening view, and a baseline fly-through **before** editing the shaders.
- [ ] Diagnose the present halo/ray appearance using the current drawing, blending, depth and projection paths. Document what actually caused any discrepancy.
- [ ] Adjust the soft emitter, diffuse mint/teal halo and feathered water beams toward the V3 SVG, preserving scene visibility and gameplay.
- [ ] Verify the complete control set, all original scene categories, responsive framing, WGSL compilation, and runtime GPU error status.
- [ ] Capture six deterministic views and a short movement recording; complete an output-only independent visual review and address issues above minor.
- [ ] Collect hardware-specific GPU timing/performance data for a scripted 60-second path and report any unverified original-target requirements.
- [ ] Produce a versioned verification report with **JS-AC01–JS-AC18** statuses, camera poses, screenshot/video paths, reproducible steps, observed differences, corrective changes and unresolved problems.
- [ ] Deliver the updated single-file `index.html`, screenshot/review evidence, and artifact size data. **Do not automatically mark the lighting complete on the basis of compilation alone.**

## 7. Implementation Verification

**Pending implementation and rendered verification.**

After the next agent produces a revised `index.html`, it must create **`index_TODO-VERIFICATION-v1.md`** (and v2, etc. for later rounds) beside this specification. Its filename includes this specification's exact stem `index_TODO` and the verification version.

The separate verification file must contain a result for every **JS-AC01 through JS-AC18**, actual rendered evidence and camera poses, visual defects, shader/error observations, environment/performance limits, and the remaining issues. A report about the **reference SVG** does not count as a WebGPU game verification.
