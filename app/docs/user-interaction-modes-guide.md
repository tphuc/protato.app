# Interaction Modes

Protato has two context-dependent interaction modes, selected by the segmented control at the top of the right sidebar.

## Devices Mode

The default mode for posing and animating devices.

### What You Can Do

- Canvas gestures control the **selected device** (drag to rotate, pinch to scale)
- The right sidebar shows: Device list, Camera controls, Screen Material settings, Shadow settings
- Select devices, pose them, load media, and animate
- The timeline (if animation mode is on) is active and editable

### What is Locked

- Text items cannot be edited or added (use Text mode for that)
- Text items already on the canvas are still visible but not interactive

## Text Mode

A focused mode for adding and editing text overlays.

### What You Can Do

- Add new text items via the Text panel
- Edit existing text content, font, size, color, position
- Select text items by tapping them on the canvas

### What is Locked

- Canvas gestures do **not** control devices — they're locked to prevent accidental repositioning while editing text
- Device selection and posing is disabled

## Switching Modes

Use the segmented picker at the top of the right sidebar:

- **Devices** (phone icon) — device posing, media, and animation mode
- **Text** (text box icon) — text editing mode

The sidebar content changes completely based on the active mode. Switching is instant and preserves all scene state.

## Photo vs. Animation Mode

In addition to the interaction modes, the toolbar has a **Photo / Animation** toggle. This controls the overall editing context:

| Mode | What It Does |
|---|---|
| **Photo** | Static scene editing. Export produces a still image. No timeline is shown |
| **Animation** | Timeline appears at the bottom of the canvas. You can add animation blocks, scrub, play, and export video |

### Switching to Animation Mode

When you switch from Photo to Animation:

1. The current device pose is persisted (so it's not lost)
2. If configured (via `animationModeSingleDevice`), all devices except the currently selected one are removed from the scene
3. Every remaining device's current pose is captured as its animation "default state" — the position it returns to during gaps between animation blocks
4. The timeline appears with one track per device, ready for block editing
5. The animation system begins tracking device position changes for recording

### Switching Back to Photo Mode

Devices, their positions, and any animation you've created remain in memory. Switching back to Photo mode hides the timeline and restores the static editing view. If you switch to Animation again, your animation data is still there.

## Mode Combinations

| Interaction Mode | Photo/Animation Mode | Typical Use Case |
|---|---|---|
| Devices | Photo | Static product shot — pose devices, set up lighting, export image |
| Devices | Animation | Animated product demo — add blocks, set transitions, export video |
| Text | Photo | Add static text overlays to a product image |
| Text | Animation | Animate text alongside device motion for a video |
