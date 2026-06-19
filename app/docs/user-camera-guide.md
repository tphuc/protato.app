# Camera Guide

The camera is your virtual viewfinder. You orbit around the scene, zoom in and out, and frame the shot — independently of the devices.

## Camera Controls

| Gesture | Effect |
|---|---|
| **Drag** (one finger/mouse) | Orbit the camera around the target — rotate left/right (yaw) and up/down (pitch) |
| **Pinch** (two fingers) | Zoom in and out — changes camera distance. Closer = more detail, farther = wider view |
| **Two-finger rotate** | Roll the camera — tilts the horizon. Use sparingly for Dutch-angle shots |
| **Pan** (hold modifier + drag, or trackpad) | Move the camera's target point — shifts what the camera is looking at |

## Inertia

When you release a drag gesture, the camera continues with a brief momentum decay. This makes orbiting feel smooth and natural. The inertia fades out quickly.

## Field of View (FOV)

The FOV slider (in the Editor sidebar) controls how much of the scene you see at once:

- **Lower FOV** (~30-40°) — Telephoto look, less distortion, more "flat" composition. Makes devices look more cinematic.
- **Medium FOV** (~45-55°) — Natural look, similar to a standard lens. Good for most product shots.
- **Higher FOV** (~60-70°) — Wide-angle look, more perspective distortion, more dramatic. Good for showing device screen content.

Default FOV is calibrated per aspect ratio.

## Aspect Ratio

The **Ratio Picker** (at the top of the Editor sidebar) sets your canvas aspect ratio. Options include:

- **9:16** — Vertical / TikTok / Instagram Story / Shorts
- **9:18.5** — Full screen vertical
- **16:9** — Horizontal / YouTube / widescreen
- **1:1** — Square / Instagram feed
- **4:5** — Portrait / Instagram portrait
- **3:4** — Classic photo ratio

Changing the ratio reshapes the canvas in real time. The camera targets are preserved but the viewport adjusts.

## How Camera Relates to Devices

The camera is **independent** from devices. You can orbit around the scene without affecting device positions. However, the camera position does affect how `offsetZ` (the device's forward/backward push) works — `offsetZ` moves the device along the camera's forward axis.
