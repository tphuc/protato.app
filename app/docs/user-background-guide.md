# Background Guide

The background fills the canvas behind your devices.

## Background Types

| Type | Description |
|---|---|
| **Solid** | A single flat color |
| **Gradient** | Multi-stop linear gradient with configurable colors, direction, and midpoints |
| **Mesh** | Mesh gradient with multiple color control points for complex, organic color transitions |
| **Image** | Load a custom image as the background |
| **None** | Transparent background (shows as checkerboard in the editor) — useful for compositing |

## Gradient Editor

The gradient type supports:

- **Multiple color stops** — add, remove, and reorder colors
- **Adjustable positions** — each stop's location is controlled by a slider (0.0 to 1.0)
- **Direction control** — choose start and end points (top-left, bottom-right, etc.)

Stops are evenly distributed by default. Drag a stop's position slider to fine-tune where each color begins to transition.

## Mesh Gradient

The mesh gradient gives you a grid of color points. Each point has:

- A **position** (X, Y in the grid)
- A **color** (customizable with the color picker)

The colors blend smoothly across the mesh, creating organic, painterly backgrounds. Great for:
- Abstract, artistic backgrounds
- Brand color gradients
- Soft, dreamy backdrops

## Image Background

Load any image file. It stretches to fill the canvas (aspect fill, cropped to fit). Useful for:

- Branded backgrounds with logos
- Environmental photos that match the product's context
- Mockup templates
- Studio backdrops

## Transparent Background

Set the background to "None" for a transparent canvas. Shows as a checkerboard pattern in the editor. When exporting as PNG, the background remains transparent — perfect for compositing the render into other designs.
