import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
    title: "How to Create a Product Reveal Video with Keyframe Animation | Protato Guide",
    description:
        "Learn how to create a cinematic product reveal animation in Protato. Set keyframes, animate camera orbits, and export 4K video — no video editor needed.",
    openGraph: {
        type: "article",
        title: "How to Create a Product Reveal Video with Keyframe Animation | Protato Guide",
        description:
            "Learn how to create a cinematic product reveal animation in Protato. Set keyframes, animate camera orbits, and export 4K video — no video editor needed.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create a product reveal video with keyframe animation")}`, width: 1200, height: 630 }],
    },
}

export default function Guide03() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create a product reveal video with keyframe animation." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 03
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create a product reveal video with keyframe animation.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A still mockup is clean. An animated one is unforgettable. Record camera moves across your scene, layer keyframes with easing, and export a cinematic product reveal video — all inside Protato, no video editor needed.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">6 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A short product reveal animation — the camera orbits around a device (or multi-device scene) with smooth motion, synced to a timeline, exported as a video file.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Animation mode toggle, timeline panel, keyframe (Animate View) button, play/pause preview, camera orbit, and video export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Animations are available on both iPhone and Mac. The Mac timeline gives you more screen space, but the iPhone workflow is identical — just tap Animation mode and go.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                    <Link href={`https://apps.apple.com/app/protato/id${macAppId}`}>
                        <Button className="text-sm" variant="default">
                             Download macOS app
                        </Button>
                    </Link>
                    <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
                        <Button className="text-sm" variant="outline">
                             Download iOS app
                        </Button>
                    </Link>
                </div>
            </div>

            <hr className="my-14 border-border/40" />

            <div className="space-y-16">
                <Step
                    number="01"
                    title="Set up your scene in Photo mode first."
                    description={[
                        "Build your mockup as you normally would — choose a device, import your screenshot, set the background, adjust lighting, and add any text overlays.",
                        "Everything you set up in Photo mode carries over to Animation mode. This way you focus on composition first and motion second.",
                    ]}
                />
                <Step
                    number="02"
                    title="Switch to Animation mode."
                    description={[
                        "Tap the toolbar toggle in the center and switch from Photo to Animation. A timeline panel appears at the bottom of the canvas.",
                        "The timeline shows a time ruler with tick marks, a play/pause button, an Animate View button (keyframe), an Add Clip button (for video-on-screen), and undo/redo arrows.",
                    ]}
                />
                <Step
                    number="03"
                    title="Set your opening keyframe."
                    description={[
                        "Position the camera where you want the animation to start — for example, zoomed out to show the full device from a slight angle.",
                        "Tap Animate View on the timeline. This captures the current camera position and device layout as the first keyframe. A small diamond appears on the timeline at the 0-second mark.",
                    ]}
                />
                <Step
                    number="04"
                    title="Move the playhead and set a second keyframe."
                    description={[
                        "Drag the playhead (the red line on the timeline) forward to about the 2-second mark. Orbit and zoom the camera to a new position — closer to the device, or a different angle that reveals the screen.",
                        "Tap Animate View again. Protato automatically creates a smooth animated transition between the first and second keyframes.",
                        "For more complex animations, repeat this process — add 3, 4, or more keyframes to create a camera path that orbits, zooms, and reveals different parts of your scene.",
                    ]}
                />
                <Step
                    number="05"
                    title="Preview and fine-tune the animation."
                    description={[
                        "Tap the Play button to preview your animation. Watch the camera move between keyframes in real time.",
                        "If the motion is too fast or too slow, drag keyframe diamonds left or right on the timeline to adjust timing. Use the timeline zoom slider to get a closer view of your keyframes.",
                        "On Mac, you can adjust the easing curve for each keyframe — choose from linear, ease-in, ease-out, or custom curves for more natural motion.",
                    ]}
                />
                <Step
                    number="06"
                    title="Export the video."
                    description={[
                        "Tap the Export button. Choose your resolution — 720p, 1080p, or 1440p. Higher resolutions look sharper but create larger files.",
                        "Tap Export and wait for the render to complete. A progress bar appears — do not close the app while rendering.",
                        "When it finishes, save the video to your device or share it directly. The result is a polished product reveal clip ready for App Store previews, social media, or pitch decks.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Keep the motion going.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Animate a full ecosystem shot — orbit between devices to create a cinematic product family reveal."
                        href="/guides/multi-device-scene"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Add animated text callouts that fade in at specific points in your timeline."
                        href="/guides/text-overlays-and-branding"
                    />
                    <ContinueCard
                        title="How to polish your mockup with studio lighting and materials."
                        description="Ensure your device looks its best from every camera angle with balanced lighting and consistent materials."
                        href="/guides/studio-lighting-and-materials"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to create a product reveal video with keyframe animation.",
                        "description": "A short product reveal animation — the camera orbits around a device with smooth motion, synced to a timeline, exported as a video file.",
                        "totalTime": "PT15M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Set up your scene in Photo mode first.",
                                "text": "Build your mockup — choose a device, import your screenshot, set the background, adjust lighting, and add text overlays. Everything carries over to Animation mode."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Switch to Animation mode.",
                                "text": "Tap the toolbar toggle and switch from Photo to Animation. A timeline panel appears at the bottom of the canvas with a time ruler, play/pause, and Animate View button."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Set your opening keyframe.",
                                "text": "Position the camera where you want the animation to start. Tap Animate View on the timeline to capture the current camera position as the first keyframe."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Move the playhead and set a second keyframe.",
                                "text": "Drag the playhead forward, orbit and zoom the camera to a new position, then tap Animate View again. Protato creates a smooth animated transition between keyframes."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Preview and fine-tune the animation.",
                                "text": "Tap Play to preview. Adjust timing by dragging keyframe diamonds on the timeline. Use the zoom slider for a closer view. On Mac, adjust easing curves for natural motion."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 6,
                                "name": "Export the video.",
                                "text": "Tap Export, choose resolution (720p, 1080p, or 1440p), and wait for the render to complete. Save or share the polished product reveal clip."
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}

function Step({ number, title, description, items }: { number: string; title: string; description: string[]; items?: string[] }) {
    return (
        <div>
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">Step {number}</p>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
            <div className="space-y-4">
                {description.map((p, i) => (
                    <p key={i} className="text-base text-muted-foreground leading-relaxed">{p}</p>
                ))}
                {items && (
                    <ul className="space-y-2 ml-5">
                        {items.map((item, i) => (
                            <li key={i} className="text-base text-muted-foreground leading-relaxed list-disc">{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

function ContinueCard({ title, description, href }: { title: string; description: string; href: string }) {
    return (
        <Link href={href} className="group block rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:bg-secondary/40 hover:border-border transition-all">
            <h3 className="font-semibold group-hover:text-foreground transition-colors">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </Link>
    )
}
