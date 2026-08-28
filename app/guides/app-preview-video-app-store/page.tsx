import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create App Preview Videos for the App Store | Protato Guide",
    description:
        "Create App Store Preview videos that showcase your app in action. Learn Apple's requirements, build 15-30 second previews with device mockups, and upload to App Store Connect.",
    openGraph: {
        type: "article",
        title: "How to Create App Preview Videos for the App Store | Protato Guide",
        description:
            "Create App Store Preview videos that showcase your app in action. Learn Apple's requirements, build 15-30 second previews with device mockups, and upload to App Store Connect.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create App Preview videos for the App Store")}`, width: 1200, height: 630 }],
    },
}

export default function Guide15() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            {/* IMAGE BRIEF: Add a vertical App Store Preview storyboard: an iPhone mockup with a visible timeline or play control, a clean app screen, and subtle motion cues. Keep the 9:16 composition and screen content readable. */}

            <GuideBreadcrumb title="How to create App Preview videos for the App Store." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 15
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create App Preview videos for the App Store.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                App Previews are 15-30 second video clips that appear on your App Store product page — right alongside your screenshots. They auto-play in search results and on the product page, making them one of the highest-impact assets you can create for conversion.
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
                        A 15-30 second App Preview video — a device mockup with a screen recording playing on the display, camera motion for visual interest, and a clean composition that meets Apple's technical requirements.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Animation mode, timeline and keyframes, Add Clip for screen recordings, 16:9 aspect ratio, video export at App Store resolutions, and App Store Connect media manager.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    App Previews are one of the most underutilized conversion levers on the App Store. Most apps don't have them — yours will stand out immediately.
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
                    title="Understand App Preview requirements."
                    description={[
                        "Apple has strict technical requirements for App Previews. Getting these wrong means rejection or failed uploads:",
                    ]}
                    items={[
                        "Duration — 15 to 30 seconds maximum. 30 seconds is the standard.",
                        "Resolution — Must match a device class: 1080 × 1920 px (iPhone portrait), 1920 × 1080 px (iPhone landscape), or 2048 × 2732 px (iPad portrait).",
                        "File format — H.264 encoded MP4, up to 500 MB per file.",
                        "Frame rate — 30 fps maximum.",
                        "Audio — Optional. If included, must be mixed to mono or stereo.",
                        "Content — Must show actual app UI. Apple rejects previews that are primarily device mockups with minimal app content.",
                    ]}
                />
                <Step
                    number="02"
                    title="Plan your 30-second preview structure."
                    description={[
                        "30 seconds is short. Plan every second. The most effective App Previews follow a clear structure:",
                    ]}
                    items={[
                        "0-5s — Establish the app context: show the device with your app's home screen, add a brief text overlay if needed",
                        "5-25s — Demonstrate the core feature: screen recording plays showing the primary user flow (this is the main content)",
                        "25-30s — Conclude with the value proposition: pull back to show the full device or end on a key screen",
                    ]}
                />
                <Step
                    number="03"
                    title="Build the device mockup and scene."
                    description={[
                        "Set your aspect ratio to 9:19.5 (for iPhone portrait previews). Design at 1080 × 1920 px — this matches the required App Preview resolution exactly.",
                        "Choose the iPhone model that matches your target device class. Apple now only requires the 6.9-inch size for screenshots, but App Previews still need to match the device class you're uploading for.",
                        "Use a clean, minimal background — solid color or subtle gradient. The focus should be on the app content, not the background. The Studio lighting preset works well because it's neutral and professional.",
                        "Position the device to fill about 60% of the frame, centered, with space around it. Unlike screenshots, the device in a preview should be large enough that the screen content is clearly visible.",
                    ]}
                />
                <Step
                    number="04"
                    title="Add a screen recording as a clip."
                    description={[
                        "The core of your App Preview is the screen recording showing your app in use. Record a smooth, intentional walkthrough of your primary feature — no fast scrolling, no awkward pauses.",
                        "In the timeline, tap Add Clip at the 5-second mark (after your establishing shot). Select your screen recording. Trim the clip to fill from 5s to 25s.",
                        "The screen recording should show exactly one coherent flow — onboarding, key feature usage, or content creation. Don't try to show everything. One clear demonstration beats three rushed ones.",
                    ]}
                />
                <Step
                    number="05"
                    title="Add subtle camera motion."
                    description={[
                        "App Previews with a static device feel flat. Add 2-3 keyframes for a gentle camera orbit that keeps the scene feeling alive without distracting from the screen content.",
                        "Set keyframe 1 at 0s (opening angle), keyframe 2 at 15s (slightly different angle), and keyframe 3 at 30s (return to near-opening angle). The motion should be subtle — think of it as a slow dolly move, not a dramatic reveal.",
                        "The camera motion is secondary to the screen recording. If the motion draws attention away from the app UI, reduce the angle difference between keyframes.",
                    ]}
                />
                <Step
                    number="06"
                    title="Export and upload to App Store Connect."
                    description={[
                        "Export your preview at 1080 × 1920 px, 30 fps, H.264 MP4. Keep the file under 500 MB — if it's larger, reduce the bitrate or trim unnecessary frames.",
                        "In App Store Connect: go to My Apps → your app → the version → Previews and Screenshots. Select the 6.9-inch iPhone tab. Drag your preview video into the media area.",
                        "App Previews appear in search results alongside your screenshots. The first 2-3 seconds are the most important — they auto-play without sound. Make sure the opening frames clearly communicate what your app does, even without audio.",
                        "You can upload up to 3 App Previews per device class. Use them to show different features or user flows. A/B test which preview drives the highest conversion using Apple's Product Page Optimization.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Strengthen your App Store presence.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="App Store screenshot sizes & requirements 2026."
                        description="Pair your App Preview with perfectly sized screenshots for a complete, conversion-optimized App Store listing."
                        href="/guides/app-store-screenshot-sizes"
                    />
                    <ContinueCard
                        title="How to make an app promo video in minutes."
                        description="Use the same animation skills to create longer promo videos for your website and social channels."
                        href="/guides/make-app-promo-video"
                    />
                    <ContinueCard
                        title="How to create your first App Store screenshot on iPhone."
                        description="Build a complete App Store asset set — screenshots plus preview video — for a professional listing that converts."
                        href="/guides/your-first-app-store-screenshot"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create App Preview Videos for the App Store",
                        "description": "Create App Store Preview videos that showcase your app in action, meeting Apple's technical requirements for duration, resolution, and format.",
                        "totalTime": "PT25M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Understand App Preview requirements.", "text": "Duration 15-30 seconds. Resolution 1080x1920 px portrait. H.264 MP4, up to 500 MB. Must show actual app UI." },
                            { "@type": "HowToStep", "position": 2, "name": "Plan your 30-second preview structure.", "text": "0-5s establish context, 5-25s demonstrate core feature with screen recording, 25-30s conclude with value proposition." },
                            { "@type": "HowToStep", "position": 3, "name": "Build the device mockup and scene.", "text": "Set aspect ratio to 9:19.5. Design at 1080x1920 px. Use clean minimal background and Studio lighting. Device fills ~60% of frame." },
                            { "@type": "HowToStep", "position": 4, "name": "Add a screen recording as a clip.", "text": "Record a smooth walkthrough of your primary feature. Tap Add Clip at 5s mark. Trim to fill from 5s to 25s." },
                            { "@type": "HowToStep", "position": 5, "name": "Add subtle camera motion.", "text": "Add 2-3 keyframes for a gentle orbit. Motion should be subtle — draw attention to the app UI, not the camera movement." },
                            { "@type": "HowToStep", "position": 6, "name": "Export and upload to App Store Connect.", "text": "Export at 1080x1920 px, 30 fps, H.264 MP4 under 500 MB. Upload to the 6.9-inch tab in App Store Connect." }
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
