# Lighting Guide

Protato uses a professional 4-point lighting rig with Image-Based Lighting (IBL) for realistic reflections.

## Lighting Modes

Three quick presets change the mood:

| Mode | Key | Fill | Rim | Back | Feel |
|---|---|---|---|---|---|
| **Studio** | 800 | 600 | 1000 | 500 | Balanced, bright product photography |
| **Dramatic** | 1200 | 500 | 800 | 2000 | High contrast, dark fill, strong backlight |
| **Flat** | 500 | 500 | 100 | 100 | Even, low contrast, minimal shadows |

## Individual Light Controls

You can fine-tune each light's **intensity** independently:

| Light | Position | Color | Purpose |
|---|---|---|---|
| **Key Light** | Front-left, above | Warm white | Main illumination — defines the primary lighting direction |
| **Fill Light** | Front-right, eye level | Cool white | Fills shadows from the key light |
| **Rim Light** | Back-left, low | Neutral white | Edge highlight — separates device from background |
| **Back Light** | Back-right, mid | White | Additional backlighting for depth |

## Exposure

The **Exposure** slider (0.0–2.0) acts as a global multiplier on all light intensities. Turn it up for a brighter scene, down for a moodier look. It also affects the IBL intensity.

## Image-Based Lighting (IBL)

IBL loads a 360° environment map ("studio02") that simutes a real studio's lighting. This creates:

- **Reflections** on the phone's glass body and screen
- **Environmental lighting** that fills in shadows naturally
- A **realistic, glossy appearance** on the phone surfaces

The IBL **Intensity** slider (separate from exposure) controls how strong those reflections are. Higher values = more mirror-like reflections.

## Material Roughness (Lighting Section)

The **Material Roughness** slider in the lighting controls adjusts the **body material** of the phone (not the screen):

- **Lower roughness** (0.05) — Glossy, reflective phone body. Looks like polished glass
- **Higher roughness** (0.8) — Matte phone body. Looks more diffused, less reflective

This is separate from the screen material roughness in the Material section. It affects the phone's chassis.

## How Lights Are Set Up

The lights are directional — they don't have a position in space, only an orientation. They are angled to shine toward the origin (where devices sit) from specific directions. This means:

- Moving the camera doesn't change how lights hit the devices
- Lights always illuminate the devices from the designed angles
- You control intensity, not position

### Light Positions

The four lights are arranged around the scene:

```
        Top View
         
         Key
          ☀️
           \
            \
    Fill —— 📱 —— Rim
            /
           /
         ☀️
        Back
```

- **Key**: Front-left, above — the main light
- **Fill**: Front-right, eye level — softens shadows
- **Rim**: Back-left, low — edge definition
- **Back**: Back-right, mid — depth separation

---

## Device Shadows

Device shadows add depth and grounding — they make it look like the phone is sitting on a real surface, not floating in space.

### Shadow Settings

| Setting | Range | Default | What It Does |
|---|---|---|---|
| **Opacity** | 0.0 – 1.0 | 0.45 | How dark the shadow is. 0 = invisible, 1 = fully black |
| **Radius** | 0 – 80+ | 24 | How soft/blurred the shadow is. Higher = softer, more diffused |
| **Disabled** | On/Off | Off | Toggle shadows on/off entirely |

### How Shadows Work

Shadows are computed by **projecting the phone's screen plane** onto the canvas:

1. The phone's 3D bounding box corners are projected into 2D screen space
2. A rounded rectangle is drawn at those projected positions
3. The shape is blurred (by the radius setting) and colored black with the opacity setting

This means:

- Shadows follow the device's actual orientation in 3D — rotate the phone and the shadow rotates too
- Shadows are true to the device model's aspect ratio and corner radius
- The shadow shape matches the phone's screen, not its body

### Shadow in Export

During image and video export, shadows are rendered as a separate compositing layer:

```
1. Background renders first
2. Shadow renders on top of the background
3. Text behind phone renders next
4. Device renders on top
5. Text in front of phone renders last
```

This compositing order means shadows correctly sit between the background and the device.

### Tips

- **Higher radius** = softer, more realistic shadows. Good for product photography looks
- **Lower radius** = harder shadows. Good for dramatic, graphic looks
- **Low opacity + high radius** = subtle depth, modern minimal look
- Shadow opacity is multiplicative with the scene — a shadow in a dark scene may appear darker
- If shadows look cut off at the canvas edges, zoom out the camera or reduce the device's scale
