# Scene Presets & Session Management

Protato saves and restores your entire scene state so you never lose your work.

## Auto-Save

The app **automatically saves your session** every 60 seconds. When you launch the app again, it restores:

- Camera position (distance, yaw, pitch, roll, FOV)
- All devices (model names, transforms, scene offsets)
- Material settings (metallic, roughness, emissive, etc. for each device)
- Aspect ratio

This happens silently and automatically. On app termination, a final save is triggered so you always pick up where you left off.

### Save Location

Auto-saves are stored in the app's UserDefaults under a dedicated "last session" key. They are not user-accessible files — they're designed purely for session resume.

## Scene Presets

**Scene presets** are predefined scene configurations bundled with the app. They are loaded from a `presets.json` file in the app bundle.

The **Scene Presets** section in the Editor sidebar shows presets matching your current aspect ratio. Tap a preset to apply it.

### What a Preset Captures

A preset saves the full scene:

- **Camera**: FOV, distance, yaw, pitch, target offset (what the camera looks at)
- **Devices**: For each device — model name, scene position offset, all transform values (scale, yaw, pitch, roll, target offset, offset Z, quaternion), all material values (metallic, roughness, emissive intensity, clearcoat, clearcoat roughness, specular)
- **Aspect ratio**: The canvas size

This means a preset can restore a multi-device scene with custom materials perfectly.

### Applying a Preset

When you tap a preset:

1. All existing devices are removed
2. New devices are created from the preset data
3. Camera position resets to the preset values
4. Aspect ratio changes to match the preset
5. Material settings are applied to each device

This resets your current scene. Make sure to export your work before trying presets.

### Exporting a Preset

You can export the current scene as a preset JSON file:

1. Use the debug or export preset button (if available)
2. The preset is saved as a `.json` file
3. Share or transfer the file to other devices/bundles
4. Load it later to restore the exact scene state

### Preset File Format

Presets are JSON with the following structure (simplified):

```json
[{
  "id": "preset-id",
  "name": "Preset Name",
  "aspectRatio": 1.778,
  "fov": 45,
  "cameraDistance": 0.8,
  "cameraYaw": 0.3,
  "cameraPitch": 0.2,
  "targetOffset": [0, 0, 0],
  "devices": [
    {
      "modelName": "ip16promaxblack",
      "scale": 1.0,
      "yaw": 0.5,
      "pitch": 0.3,
      "roll": 0,
      "metallic": 1.0,
      "roughness": 0.15,
      ...
    }
  ]
}]
```

You can create your own preset JSON files and bundle them with the app.
