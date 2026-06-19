import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Make an App Promo Video in Minutes | Protato Guide",
    description:
        "Create a professional app promo video without video editing software. Use keyframe animation, camera orbits, and screen recordings to produce a cinematic product video fast.",
    openGraph: {
        type: "article",
        title: "How to Make an App Promo Video in Minutes | Protato Guide",
        description:
            "Create a professional app promo video without video editing software. Use keyframe animation, camera orbits, and screen recordings to produce a cinematic product video fast.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to make an app promo video in minutes")}`, width: 1200, height: 630 }],
    },
}

export default function Guide13() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to make an app promo video in minutes." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 13
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to make an app promo video in minutes.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A still mockup shows your app. A video sells it. With Protato you can create a cinematic promo video — camera orbits, screen recordings, text overlays, and smooth transitions — without opening a traditional video editor.
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
                        A 10-15 second app promo video with a camera orbit around your device, a screen recording playing on the display, and text callouts that fade in at key moments.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Animation mode toggle, timeline and keyframes, camera orbit, Add Clip for screen recordings, text editor with opacity keyframes, and video export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Promo videos work on both iPhone and Mac. The timeline gives you more precision on Mac, but the iPhone workflow is identical. Open Protato and follow along.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                    <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
                        <Button className="text-sm" variant="default">
                             Download iOS app
                        </Button>
                    </Link>
                    <Link href={`https://apps.apple.com/app/protato/id${macAppId}`}>
                        <Button className="text-sm" variant="outline">
                             Download macOS app
                        </Button>
                    </Link>
                </div>
            </div>

            <hr className="my-14 border-border/40" />

            <div className="space-y-16">
                <Step
                    number="01"
                    title="Plan your promo video storyboard."
                    description={[
                        "A great promo video tells a story in 10-15 seconds. Sketch a simple storyboard before opening Protato. A classic structure:",
                    ]}
                    items={[
                        "0-3s — Establish the scene: device centered, clean background, app name visible",
                        "3-7s — Camera orbits to reveal the screen: device fills more of the frame",
                        "7-12s — Screen recording plays on the device showing the key feature in action",
                        "12-15s — Pull back to show the full device with a tagline overlay",
                    ]}
                />
                <Step
                    number="02"
                    title="Set up your scene in Photo mode first."
                    description={[
                        "Build your static mockup before entering animation mode. Pick a device, import your app screenshot or a frame from your screen recording, choose a background, and set the lighting.",
                        "Use a clean background style — a subtle gradient or solid color. Busy backgrounds are distracting in motion. The Studio lighting preset works well for video because it illuminates the device evenly from all angles.",
                        "Set your aspect ratio to 16:9 for widescreen promo videos or 9:16 for vertical social video. The 16:9 ratio is standard for App Store previews and YouTube.",
                    ]}
                />
                <Step
                    number="03"
                    title="Switch to Animation mode and add keyframes."
                    description={[
                        "Tap the Photo/Animation toggle in the toolbar to switch to Animation mode. The timeline appears at the bottom of the canvas.",
                        "Position the camera at your opening angle (slightly zoomed out, showing the full device). Tap Animate View to set the first keyframe at 0 seconds.",
                        "Move the playhead to 3 seconds. Orbit the camera closer to the device or to a different angle. Tap Animate View again. Protato creates a smooth transition between the two keyframes.",
                        "Continue adding keyframes every 3-5 seconds to build your camera path. Each keyframe captures both the camera position and device layout at that moment.",
                    ]}
                />
                <Step
                    number="04"
                    title="Add a screen recording clip onto the device."
                    description={[
                        "For the section where you want to show your app in action, use a screen recording instead of a static image. Record your app on your iPhone simulator or real device, then transfer the video to Protato.",
                        "On the timeline at the point where you want the video to start, tap Add Clip. Select your screen recording from Files or Photos. The video appears on the device screen and plays during that section of the timeline.",
                        "The screen recording automatically syncs to the timeline — trim the clip by dragging its edges on the timeline to match your desired duration.",
                    ]}
                />
                <Step
                    number="05"
                    title="Add text overlays with fade transitions."
                    description={[
                        "Text overlays in animation mode can fade in and out at specific points. Add a text element (your app name or tagline) at the beginning of the scene.",
                        "In the Layout tab, set Opacity to 0 at the start keyframe, then to 1 at a keyframe 0.5 seconds later. The text fades in smoothly. This works for any text element — headlines, feature labels, or CTAs.",
                        "For the ending call-to-action, add a text overlay that fades in during the last 2 seconds of the video. Keep it short: \"Available now on the App Store\" or \"Get started free.\"",
                    ]}
                />
                <Step
                    number="06"
                    title="Preview, refine, and export."
                    description={[
                        "Tap Play to preview your full animation. Watch for awkward camera movements, text that appears too quickly, or screen recordings that don't sync properly.",
                        "Adjust timing by dragging keyframe diamonds left or right on the timeline. Use the timeline zoom slider to get a closer view of your keyframes for precise adjustments.",
                        "When you're happy with the preview, tap Export. Choose your resolution — 1080p is standard for most use cases, 1440p for premium quality. Do not close the app while rendering. When complete, save or share your promo video.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Take your video further.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create a product reveal video with keyframe animation."
                        description="A focused guide on the animation mechanics — perfect for dialing in your keyframe timing and camera paths."
                        href="/guides/product-reveal-video"
                    />
                    <ContinueCard
                        title="How to make an Instagram Reel for your app."
                        description="Adapt your promo video for vertical 9:16 format — the same scene, optimized for mobile-first social platforms."
                        href="/guides/instagram-reel-app-mockup"
                    />
                    <ContinueCard
                        title="How to create App Preview videos for the App Store."
                        description="Convert your promo video into an App Store Preview that meets Apple's specific duration and content requirements."
                        href="/guides/app-preview-video-app-store"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Make an App Promo Video in Minutes",
                        "description": "Create a professional app promo video using keyframe animation, camera orbits, and screen recordings without video editing software.",
                        "totalTime": "PT20M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Plan your promo video storyboard.", "text": "Sketch a 10-15 second storyboard: establish scene, orbit to reveal, show screen recording, end with tagline." },
                            { "@type": "HowToStep", "position": 2, "name": "Set up your scene in Photo mode first.", "text": "Build your static mockup with a clean background and Studio lighting preset. Use 16:9 aspect ratio for standard promos." },
                            { "@type": "HowToStep", "position": 3, "name": "Switch to Animation mode and add keyframes.", "text": "Toggle to Animation mode. Set opening keyframe at 0s, orbit camera and set next keyframe at 3s. Continue every 3-5 seconds." },
                            { "@type": "HowToStep", "position": 4, "name": "Add a screen recording clip onto the device.", "text": "Record your app screen on a simulator or device. Tap Add Clip on the timeline and select your recording. Trim clip edges to match duration." },
                            { "@type": "HowToStep", "position": 5, "name": "Add text overlays with fade transitions.", "text": "Add text elements and animate opacity from 0 to 1 across keyframes. Fade in headlines, feature labels, and a closing CTA." },
                            { "@type": "HowToStep", "position": 6, "name": "Preview, refine, and export.", "text": "Tap Play to preview. Adjust timing by dragging keyframes. Export at 1080p or 1440p resolution. Do not close the app during render." }
                        ]
                    })
                }}
            />

        </main>
    )
}

function Step({ number, title, description, items, children }: { number: string; title: string; description: string[]; items?: string[]; children?: React.ReactNode }) {
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
                {children}
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
