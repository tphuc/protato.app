# Posing Guide (Device Transform)

Posing a device means changing its **scale, rotation, and position** in 3D space.

## Transform Properties

Every device has these transform values:

| Property | What It Controls |
|---|---|
| **Scale** | How large or small the device appears. Range 0.5x to 3.0x |
| **Yaw** | Rotation around the vertical axis (left/right facing) |
| **Pitch** | Rotation around the horizontal axis (tilting up/down) |
| **Roll** | Rotation around the forward axis (tilting sideways) |
| **Target Offset (X, Y)** | Lateral movement — shift the device left/right and up/down |
| **Offset Z** | Push the device closer to or farther from the camera |

## Gesture Controls

Select a device (tap it on the canvas or in the Devices panel), then:

| Gesture | Effect |
|---|---|
| **Drag** (one finger) | Orbit the device — rotates it in 3D space. Drag up to tilt back, drag sideways to yaw |
| **Pinch** (two fingers) | Scale the device up or down |
| **Two-finger rotate** | Roll the device (spin around its forward axis) |
| **Pan gesture** (special area) | Drag on the thin edges of the canvas to pan the device left/right/up/down |

## How Rotation Works

Device rotation is **camera-relative**. When you drag the device:

1. On first drag, the camera's current right and up axes are snapshotted
2. The drag vector is projected onto those axes to create a clean rotation
3. The result is decomposed back into yaw, pitch, and roll for storage and animation

This means dragging up on the screen always tilts the device "up" from the viewer's perspective, regardless of camera angle. The rotation feels natural because it's tied to your viewpoint.

## Scale Limits

- **Minimum**: 0.5x (device doesn't disappear but can be very small)
- **Maximum**: 3.0x (device can get quite large, useful for zoomed-in screen detail shots)

## The Offset Z Special Case

Offset Z is not a native 3D transform property. It's implemented as a **camera-relative push** — the device moves along the camera's forward vector. This means:

- Moving Offset Z positive pushes the device **away** from camera
- Moving Offset Z negative pulls the device **closer** to camera
- If you orbit the camera, the Offset Z direction changes accordingly

This is useful because it lets you move devices closer or farther without having to redo their rotation or lateral position.
