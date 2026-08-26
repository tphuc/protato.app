# Protato - Lighting & Background Guide

How to customize scene atmosphere using lighting rigs and background options with UI element context (macOS vs iOS/iPadOS).

---

## 💡 macOS: Lighting Controls

### One-Click Lighting Presets (macOS)

**Studio Mode** - Professional three-point lighting look
- **Click**: Lighting presets dropdown → **Studio**
- **Effect**: Key light (5500K), fill light (6500K), rim light, back light activate
- **Use case**: Clean, balanced illumination for product showcases

**Dramatic Mode** - High-contrast cinematic look
- **Click**: Lighting presets dropdown → **Dramatic**
- **Effect**: Strong key light, reduced fill, enhanced rim lighting, deeper shadows
- **Use case**: Dramatic product reveals, movie-style presentation

**Flat Mode** - Even, shadowless illumination
- **Click**: Lighting presets dropdown → **Flat**
- **Effect**: All four lights at equal intensity, soft even lighting
- **Use case**: Technical demonstrations, even lighting across all device surfaces

### Manual Light Adjustment (macOS)

After applying a preset, fine-tune individual lights using the inspector panel:

| Light | UI Control | Description |
|-------|------------|-------------|
| **Key Light** | Intensity slider (0–2000) | Primary light source; drag slider right for brighter, left for dimmer |
| **Fill Light** | Intensity slider (0–2000) | Reduces shadows; adjust for shadow softness |
| **Rim Light** | Intensity slider (0–2000) | Creates edge highlight around device |
| **Back Light** | Intensity slider (0–2000) | Separates device from background |
| **Color Temperature** | Color wheel per light | Key: 5500K, Fill: 6500K, Rim: 6000K, Back: 6000K (default) |

### IBL Skybox Environment (macOS)

- **Click**: IBL selector in the lighting inspector → opens **9-environment gallery**
- **Scroll** through thumbnails: coastal, studio, dramatic, outdoor, etc.
- **Click any skybox** → immediate environment change with reflection updates
- **Exposure slider** → 0.1–10.0 multiplier for overall scene brightness (inspector slider)
- **Pro tip**: Dramatic skyboxes (stormy, sunset) pair well with Dramatic lighting preset

## 📱 iOS/iPadOS: Lighting Controls

### One-Click Lighting Presets (iOS/iPadOS)

**Studio Mode** - Professional three-point lighting look
- **Tap**: Lighting presets dropdown → **Studio**
- **Effect**: Key light, fill light activate automatically
- **Use case**: Clean presentation for portfolio shots

**Dramatic Mode** - High-contrast cinematic look
- **Tap**: Lighting presets dropdown → **Dramatic**
- **Effect**: Strong key lighting, enhanced shadows
- **Use case**: Artistic product showcases

**Flat Mode** - Even, shadowless illumination
- **Tap**: Lighting presets dropdown → **Flat**
- **Effect**: Soft even lighting across all surfaces
- **Use case**: Even illumination for all device sides

### Manual Light Adjustment (iOS/iPadOS)

After applying a preset, fine-tune lights using touch controls:

| Light | UI Control | Description |
|-------|------------|-------------|
| **Key Light** | Intensity slider | Drag right for brighter, left for dimmer |
| **Fill Light** | Intensity slider | Adjust shadow softness |
| **Rim Light** | Intensity slider | Edge highlight control |
| **Back Light** | Intensity slider | Device separation |
| **Color Temperature** | Color selector | Per-light temperature adjustment |

### IBL Skybox Environment (iOS/iPadOS)

- **Tap**: IBL selector in the lighting inspector → opens **9-environment gallery**
- **Scroll** through thumbnails with live preview
- **Tap any skybox** → immediate environment change
- **Exposure slider** → adjust overall brightness
- **Pro tip**: Dramatic skyboxes pair well with Dramatic preset

## 🖼️ macOS: Background Options

### Background Type Tabs (macOS)

Click the **Background settings** tab → reveals tabs for each background type (inspector panel at right):

#### None (Transparent)
- **Click**: Background type → **None**
- **Result**: Alpha channel in export; image exports with transparent background
- **Use case**: Logos, watermarks, overlays that need transparent BG
- **File format**: PNG or HEIC for transparency support

#### Solid Color
- **Click**: Background type → **Solid**
- **Color picker**: Appears → select any sRGB color
- **Opacity slider**: 0% (fully transparent) to 100% (opaque)
- **Use case**: Single-color backdrops, brand color integration

#### Linear Gradient (macOS)
- **Click**: Background type → **Linear Gradient**
- **Gradient stops**: Add/remove color stops by clicking the gradient bar
- **Angle input**: Set rotation angle (0–360 degrees) via numeric field
- **Presets dropdown**: 20+ saved gradient configurations
- **Color stops**: Click anywhere on gradient bar to add new color stop
- **Stop color**: Click color swatch on stop to change hue
- **Stop opacity**: Adjust each stop's transparency individually
- **Use case**: Modern colorful backgrounds, brand gradients

#### Mesh Gradient (macOS)
- **Click**: Background type → **Mesh Gradient**
- **Interactive 4×4 grid**: Click any control point to move it
- **Drag points** → reshape gradient mesh control net
- **12 preset thumbnails**: Scroll presets dropdown for quick apply
  - Presets include: "Sunset", "Ocean", "Aurora", "Corporate", etc.
- **Color per point**: Click any grid intersection to change color
- **Pro tip**: Move corner points outward for dramatic wide-angle gradient

#### Image Background (macOS)
- **Click**: Background type → **Image**
- **File browser**: Select any PNG, JPEG, or image file from Finder
- **Fit options**: .fill, .fit, .stretch (same as screen content fit modes)
- **Opacity slider**: 0–100% transparency
- **Blur slider**: 0–50px Gaussian blur amount
- **Use case**: Environment context, lifestyle backgrounds behind devices

## 📱 iOS/iPadOS: Background Options

### Background Type Tabs (iOS/iPadOS)

Tap the **Background settings** tab → reveals tabs for each background type (inspector at bottom/right):

#### None (Transparent)
- **Tap**: Background type → **None**
- **Result**: Alpha channel in export; image exports with transparent background
- **Use case**: Logos, watermarks, overlays needing transparent BG
- **File format**: PNG or HEIC for transparency support

#### Solid Color
- **Tap**: Background type → **Solid**
- **Color picker**: Appears → select any sRGB color
- **Opacity slider**: 0% (fully transparent) to 100% (opaque)
- **Use case**: Single-color backdrops, brand color integration

#### Linear Gradient (iOS/iPadOS)
- **Tap**: Background type → **Linear Gradient**
- **Gradient stops**: Add by tapping + on the gradient bar
- **Angle input**: Angle selector wheel (0–360 degrees)
- **Presets dropdown**: 20+ saved gradient configurations
- **Color stops**: Tap anywhere on gradient bar to add new stop
- **Stop color**: Tap color swatch to change hue
- **Stop opacity**: Adjust each stop's transparency
- **Use case**: Modern colorful backgrounds, brand gradients

#### Mesh Gradient (iOS/iPadOS)
- **Tap**: Background type → **Mesh Gradient**
- **Interactive 4×4 grid**: Tap any control point to move it
- **Drag points** → reshape gradient mesh control net
- **12 preset thumbnails**: Scroll presets dropdown for quick apply
  - Presets include: "Sunset", "Ocean", "Aurora", "Corporate", etc.
- **Color per point**: Tap any grid intersection to change color
- **Pro tip**: Move corner points outward for dramatic wide-angle gradient

#### Image Background (iOS/iPadOS)
- **Tap**: Background type → **Image**
- **File browser**: Select any PNG, JPEG, or image file from Files app
- **Fit options**: .fill, .fit, .stretch (same as screen content fit modes)
- **Opacity slider**: 0–100% transparency
- **Blur slider**: 0–50px Gaussian blur amount
- **Use case**: Environment context, lifestyle backgrounds behind devices

## 🎛️ macOS: UI Elements Referenced

- **Lighting presets dropdown** → top of lighting inspector, three preset buttons (Studio/Dramatic/Flat)
- **Intensity sliders** → per-light drag controls (0–2000 range) in inspector panel
- **Color wheel** → per-light color temperature adjustment (inspector)
- **IBL selector gallery** → 9 skybox thumbnails with live preview (inspector panel)
- **Exposure slider** → global lighting exposure multiplier (inspector slider)
- **Background type tabs** → Solid / Linear Gradient / Mesh Gradient / Image / None (inspector panel)
- **Gradient color bar** → click to add stops, drag to reposition (gradient visual)
- **Gradient color swatches** → click to change individual stop colors (gradient stops)
- **Mesh gradient 4×4 grid** → click/drag control points to reshape (grid overlay)
- **Presets dropdown** (Mesh Gradient) → 12 saved gradient configurations (dropdown)
- **Image browser** → file selection dialog for image background type (Finder panel)
- **Fit/Blur sliders** (Image background) → opacity and blur amount controls (inspector sliders)
- **Background inspector tab** → panel containing all background type options (collapsible panel)

## 📱 iOS/iPadOS: UI Elements Referenced

- **Lighting presets dropdown** → top of lighting inspector, three preset buttons (Studio/Dramatic/Flat)
- **Intensity sliders** → per-light drag controls via touch (inspector touch sliders)
- **Color selector** → tap to adjust per-light color temperature (inspector color wheel)
- **IBL selector gallery** → 9 skybox thumbnails with live preview (inspector scroll)
- **Exposure slider** → global lighting exposure multiplier (inspector slider)
- **Background type tabs** → Solid / Linear Gradient / Mesh Gradient / Image / None (inspector tabs)
- **Gradient color bar** → tap + to add stops, drag to reposition (gradient visual)
- **Gradient color swatches** → tap to change individual stop colors (stop color widgets)
- **Mesh gradient 4×4 grid** → tap/drag control points to reshape (grid touch)
- **Presets dropdown** (Mesh Gradient) → 12 saved gradient configurations (dropdown menu)
- **File browser** → Files app selection for image background type (file picker sheet)
- **Fit/Blur sliders** (Image background) → opacity and blur amount controls (inspector sliders)
- **Background inspector tab** → collapsible panel with all background type options