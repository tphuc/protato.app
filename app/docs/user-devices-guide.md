# Devices Guide for Protato

## Philosophy

Every Protato scene starts with a device — a 3D phone model that sits in your virtual studio, displays video or images on its screen, and can be posed, animated, and exported.

The device system is built around a simple idea: **each device is an independent actor**. It has its own:

- **Hardware** — the phone model you choose (e.g., iPhone 15 Pro Max)
- **Position** — where it sits in 3D space and how it's rotated
- **Screen** — what material it shows (video, image, or solid color) and its surface finish
- **Animation track** — its own set of keyframed poses on the timeline

You can work with one device in close-up or arrange multiple devices side by side for comparison shots. Each one behaves like a fully independent prop.

---

## The Device Panel

The **Devices** panel (usually in the right sidebar) lists every device in your scene. Each row shows:

| Element | What It Means |
|---|---|
| **Device thumbnail** | A small photo of the phone model |
| **Device name** | "1. iPhone 16 Pro Max" — index number + model name |
| **Media filename** | The video or image currently on the screen, or "No media" |
| **Media button** | Tap to load a new video or image onto this device's screen |
| **Model button** | Tap to change the phone model (iPhone 15, 16, sizes, colors) |
| **Delete button** | Remove this device from the scene (only shown when 2+ devices exist) |

Tap a device row to **select** it — the selection highlight turns blue, and all transform controls (scale, rotate, position gestures) now apply to this device.

---

## Adding Devices

### First Device

A scene starts with one device automatically. It appears centered in the 3D view, ready for you to pose and load media.

### Adding More

Tap the **"+ Add Device"** button at the top of the Devices panel. The new device appears to the left or right of existing ones, evenly spaced. The camera view adjusts automatically so you can see all devices.

### Single-Device Mode

If you have multiple devices but want to simplify, tap the **"Reduce to Single"** button (available in some views). This removes all devices except the currently selected one, keeping its media and position intact.

---

## Selecting Devices

You can select a device three ways:

1. **Devices panel** — tap a device row
2. **3D canvas** — tap directly on the phone model in the viewport
3. **Timeline sidebar** — tap the device label next to the track

When a device is selected:
- A blue highlight appears around its row in the Devices panel
- Its animation track is active in the timeline
- All canvas gestures (drag, pinch, rotate) control this device
- The material controls and transform controls apply to this device

Selecting a different device:
- The previous device's pose is saved
- The new device's pose is restored
- Timeline selection (active block/clip) switches to the new device

---

## Changing the Phone Model

Each device has a model name. To change it:

1. Select the device
2. Tap the **model button** (icon with phone sizes) in its row
3. A **Device Picker Sheet** opens showing available models
4. Tap a model to select it

The device reloads in the 3D view with the new model. Media on its screen, transform position, and animation data are preserved.

The model selector shows thumbnail images arranged horizontally, with the currently selected model highlighted by an accent-colored border.

---

## Device Positions and Layout

### Default Spacing

When devices are added, they're arranged in a horizontal row using a simple formula:

> **Spacing = 0.02 units** between device centers

The row is centered in the scene. With 1 device, it sits at the origin. With 2 devices, they flank the origin left and right. With 3, one is centered and two flank it, and so on.

This default layout gives you an instant multi-device product comparison shot.

### Repositioning

You're not stuck with the default layout. Select any device and:

- **Drag** to move it in the view plane
- **Pinch** to scale it
- **Two-finger rotate** to yaw, pitch, and roll it
- Use the **Offset Z** slider in transform controls to move it closer or farther from camera

These transforms are per-device and independent. Each device can be at a completely different position, scale, and rotation.

### Reindexing

If you remove a device, the remaining devices **automatically respace** themselves using the default layout. This keeps the arrangement tidy when you're working with multiple devices in a row.

---

## The Device Screen

Every device has a screen that can display:

- **A video** (plays in real time on the 3D model)
- **An image** (static photo)
- **Nothing** (a dark/black screen)

### Loading Media

Tap the **media button** (camera icon) in a device's row in the Devices panel. You'll be prompted to choose a video or image file. The screen updates immediately.

- **Videos** — play on the device screen in the 3D view. During animation playback, the video syncs with the timeline.
- **Images** — appear as a static texture on the screen. Great for product hero shots or app screenshots.

### Screen Material Properties

The screen isn't just a flat display — it's a physically based material that simulates real glass. You can control:

| Property | What It Does | Default |
|---|---|---|
| **Metallic** | How mirror-like the screen surface is | 1.0 (fully metallic) |
| **Roughness** | How diffused reflections are | 0.15 (fairly smooth) |
| **Emissive Intensity** | How brightly the screen content glows | 1.0 |
| **Clearcoat** | Extra glossy layer on top (like modern phone glass) | 0.05 |
| **Clearcoat Roughness** | How smooth that clearcoat layer is | 0.9 |
| **Specular** | Reflection highlight intensity | 1.0 |

These values apply to **both** video and image content. A video playing on the screen still respects the metallic and roughness settings — it won't look like a raw monitor, it'll look like a phone screen sitting under glass.

### Material Presets

Three quick presets are available to one-tap apply a combination of these settings:

| Preset | Look |
|---|---|
| **Preset 1** | Bright, glossy phone screen — high emissive, smooth clearcoat |
| **Preset 2** | Muted, matte screen — lower metallic, higher roughness |
| **Preset 3** | Very bright, highly reflective — max emissive, smooth surface |

### How Video Rendering Works

When you load a video, the system uses one of two rendering paths:

1. **Live PBR texture** (preferred during playback) — Each video frame is extracted, downscaled to 1440px, and applied as a texture to the PhysicallyBasedMaterial. This preserves the metallic/roughness/emissive look on top of the video.

2. **VideoMaterial fallback** (initial load or scrubbing) — Uses RealityKit's native VideoMaterial for responsive scrubbing. PBR properties are simplified during this mode.

The system switches between these automatically. You generally don't need to think about it.

### IBL Reflections

The phone screen and body reflect the scene's lighting environment (Image-Based Lighting). When a device loads, it's set up as an IBL receiver — meaning the environment map reflects off the phone's body, giving it a realistic, glossy appearance. This is why the phone looks like it's sitting in a real studio, not floating in empty space.

---

## Multi-Device Workflows

### Product Comparison

Add 2-3 devices side by side. Load different videos or images on each. Each device can be animated independently — they can rotate in sequence, zoom in at different times, or hold static while the other moves.

### Sequential Reveal

Place two devices at different positions. Animate one to zoom in and show detail, then animate the other. During export, it reads like a single multi-shot product video.

### Same Device, Different Angles

Add the same model twice. Pose one as a front view, the other as a rotated 3/4 view. Animate between them by turning visibility on and off (or move the camera).

### Best Practices

- **Name your devices** mentally by their media content — "Phone with Screen Recording" vs "Phone with Hero Image"
- **Use default spacing** as a starting point, then adjust for composition
- **Keep transforms consistent** — if one device is at scale 1.0 and another at 2.0, the size difference might confuse viewers
- **Each device needs media** — a device with no visible screen content looks dark and unappealing
- **Material settings apply per device** — you can have one glossy and one matte for contrast

---

## Device Lifecycle

### Adding

Tap "+ Add Device" → device appears with the default model, default position offset, and an empty screen.

### Removing

Tap the trash icon on a device row (only visible when 2+ devices exist). The device is removed, along with its animation track. Remaining devices respace automatically. **This cannot be undone** — but you can always add the device again.

### Reloading

If you change a device's model, it reloads the 3D entity. The model name is updated. Screen media, transforms, and animation data are preserved.

### Export

When you export, every device in the scene is included. Each device's:
- Model geometry
- Screen material and video state
- Position and transform
- Animation keyframes

...are all baked into the final video. Devices render in their correct positions with correct screen content.

---

## Interface Overview

```
┌─────────────────────────────────────────────────┐
│                 3D Canvas                         │
│                                                   │
│     ┌──────┐          ┌──────┐                   │
│     │ 📱A  │          │ 📱B  │                   │
│     │      │          │      │                   │
│     └──────┘          └──────┘                   │
│        (selected)                                 │
├─────────────────────────────────────────────────┤
│  Devices Panel                                    │
│  ┌──────────────────────────────────────────────┐│
│  │ Devices                     [+ Add Device]   ││
│  ├──────────────────────────────────────────────┤│
│  │ [📱] 1. iPhone 16 Pro Max       🎬 🔄  🗑  ││
│  │      screen-recording.mp4                    ││
│  │ [📱] 2. iPhone 16 Pro Max       🎬 🔄     ││
│  │      No media                                ││
│  └──────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  Timeline (per-device tracks)                    │
│  📱 Phone 1 ┃ ┌──┬────┐                         │
│  📱 Phone 2 ┃    ┌──┬────┐                      │
└─────────────────────────────────────────────────┘
```

### Key UI Elements

| Element | Location | Action |
|---|---|---|
| **Device thumbnail** | Devices panel row | Shows phone model icon |
| **Device name** | Devices panel row | Tap to select |
| **Media filename** | Devices panel row | Shows current screen content |
| **Media button** | Row right side | Load video/image |
| **Model button** | Row right side | Change phone model |
| **Delete button** | Row right side | Remove device |
| **Add Device** | Panel header | Add new device |
| **Device label** | Timeline sidebar | Tap to select |
| **Phone on canvas** | 3D viewport | Tap to select |

---

## Common Questions

**Why does my device look dark?**
The screen needs media loaded. A device with no video or image appears dark/black. Also check that IBL is working (the environment should reflect off the phone body). If IBL isn't set up, the phone may look flat.

**Why did my device jump position after selecting another one?**
That's normal — each device remembers its own transform. When you select a different device, the previous device's pose is saved and the new one's pose is restored. Switch back and the original pose returns.

**Can I hide a device without deleting it?**
Not currently. If you want to work with devices one at a time, use "Reduce to Single" to focus on one, then add devices back as needed.

**Why does my video look different on the phone screen vs. my computer?**
The screen applies PBR material properties (metallic, roughness, emissive) on top of the video. It's deliberately not a raw monitor — it simulates light interacting with a phone's glass surface. Adjust the material presets if the look isn't what you want.

**What happens to my animation when I change a device model?**
Animation blocks are stored per device ID as transform states (scale, rotation, position). Changing the model doesn't affect the animation — the new model will follow the same transforms. However, the geometry of the new model might look different at the same scale, so you may need to tweak positions.

**Can I have different videos playing on different devices?**
Yes. Each device has its own `MaterialController` and independent `AVPlayer`. They play and seek independently during animation. Great for multi-angle product demos.
