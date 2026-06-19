# Media Loading Guide

Loading media onto a device screen is done through the **media button** (camera icon) in the Devices panel.

## Loading a Video

1. Select a device
2. Tap the media button (camera icon) next to its row in the Devices panel
3. Choose a video file from your computer/device
4. The video loads and starts playing on the phone's screen in the 3D view
5. The timeline duration adjusts to match the video length

## Loading an Image

1. Follow the same process
2. Choose an image file (PNG, JPEG, etc.)
3. The image appears as a static texture on the screen

## How Media Is Displayed

- **Videos**: Played via `AVPlayer`. During animation playback, the video syncs with the timeline via frame-accurate seeking. The frame rate is independent of the animation frame rate — the video plays smoothly on the phone screen while the 3D scene renders at up to 60fps.
- **Images**: Loaded as a `TextureResource` and applied as the device screen's emissive and base color. The image is static — it does not animate or change over time.

## Media on Screen Material

When media is loaded, it interacts with the screen's material properties:

- For **images**: The texture is applied with full PBR (metallic, roughness, emissive, clearcoat) support. The image looks like it's part of the phone's glass surface.
- For **videos**: During playback, video frames are extracted and applied as a PBR texture. This preserves the metallic/roughness/emissive look. If PBR texture extraction isn't available (e.g., during scrubbing), RealityKit's native `VideoMaterial` is used as a fallback.

## The Screenshot Loader

The **Screenshot Loader** button (toolbar) is a quick-access way to load media onto the currently selected device. It's functionally identical to the media button in the Devices panel but lives in the toolbar for convenience.

- Click the button
- Pick a video or image file
- The media loads onto the selected device

## Per-Device Media

Each device has its own independent media controller. This means:

- Different devices can play **different videos** simultaneously
- Each device can independently have an image or video
- During animation, each device's video syncs independently to the timeline
- During export, each device's video is extracted separately for frame-accurate compositing

## Clearing Media

To remove media from a device's screen, load a new image/video (which replaces the current one), or the screen returns to its default material state.

## Supported Formats

The app uses the system's built-in media support:

- **Video**: Any format supported by `AVPlayer` (MP4, MOV, M4V, etc.)
- **Image**: Any format supported by platform image loading (PNG, JPEG, HEIC, etc.)
