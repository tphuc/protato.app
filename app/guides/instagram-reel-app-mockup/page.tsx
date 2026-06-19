import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Make an Instagram Reel for Your App | Protato Guide",
    description:
        "Create engaging Instagram Reels for your app launch using 3D device mockups. Design vertical 9:16 animations with camera orbits, text callouts, and app screen recordings.",
    openGraph: {
        type: "article",
        title: "How to Make an Instagram Reel for Your App | Protato Guide",
        description:
            "Create engaging Instagram Reels for your app launch using 3D device mockups. Design vertical 9:16 animations with camera orbits, text callouts, and app screen recordings.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to make an Instagram Reel for your app")}`, width: 1200, height: 630 }],
    },
}

export default function Guide14() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to make an Instagram Reel for your app." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 14
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to make an Instagram Reel for your app.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Instagram Reels are the highest-engagement format on the platform. A 15-second Reel showing your app in a 3D device mockup, with smooth camera motion and text overlays, can generate more installs than a month of static posts.
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
                        A 15-second vertical Instagram Reel — a 3D device mockup with a rotating camera, text callouts that fade in at the beat, and a screen recording on the device display.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        9:16 aspect ratio, Animation mode, keyframes (Animate View), text editor with opacity animation, Add Clip for screen recordings, and video export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Reels are vertical — design at 9:16 from the start so your composition fills the screen. Open Protato and create your first Reel.
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
                    title="Set up your vertical canvas."
                    description={[
                        "Instagram Reels use a 9:16 vertical aspect ratio. In Protato, set your canvas to 9:19.5 in the Ratio tab — this matches the full vertical phone screen ratio and ensures your composition fills the Reel without black bars.",
                        "Design at 1080 × 1920 px output resolution. Use 2x quality for retina-sharp results. The extra vertical space means you should position your device higher than center to leave room for text below.",
                    ]}
                />
                <Step
                    number="02"
                    title="Build a vertical-optimized device mockup."
                    description={[
                        "In a vertical Reel, the device takes up about 60-70% of the frame. Position it in the upper half of the canvas using Pan mode, leaving the lower third for text overlays.",
                        "Choose a bold, high-contrast background. Gradients with bright colors work well on Instagram because they catch the eye during fast scrolling. Avoid dark backgrounds — Reels are often viewed in bright environments.",
                        "Use the Dramatic lighting preset to make the device stand out against the background. A strong rim light separates the phone from the backdrop, which is especially important in vertical format where the device is large in the frame.",
                    ]}
                />
                <Step
                    number="03"
                    title="Create a short camera animation."
                    description={[
                        "Switch to Animation mode. Reels work best with simple, smooth camera motions — not complex multi-keyframe paths. A gentle orbit or slow zoom keeps the focus on the device.",
                        "Set your opening keyframe at 0 seconds with the camera at a 3/4 angle. Move the playhead to 5 seconds, orbit slightly to a different angle, and set a second keyframe. The slow orbit creates a professional 3D feel without being distracting.",
                        "For a 15-second Reel, 3-4 keyframes is plenty. More than that makes the motion feel jittery. Let the camera linger at each position for a few seconds before moving.",
                    ]}
                />
                <Step
                    number="04"
                    title="Add text callouts timed to the motion."
                    description={[
                        "Text is critical for Reels because many viewers watch without sound. Add 2-3 text overlays that appear at different points in the animation:",
                    ]}
                    items={[
                        "Opening (0s) — Your app name in large bold text at the top of the frame",
                        "Middle (5s) — A benefit statement: \"Track everything\" or \"Design in 3D\"",
                        "Closing (12s) — A call-to-action: \"Download now\" or \"Try free\"",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Animate each text element by setting Opacity to 0 at the keyframe before you want it to appear, then Opacity to 1 at the keyframe where it should be visible. A 0.3-second fade-in feels natural and professional.
                    </p>
                </Step>
                <Step
                    number="05"
                    title="Add a screen recording clip."
                    description={[
                        "To show your app in action within the Reel, add a screen recording as a clip on the device screen. Record your app's key flow — 5-10 seconds is enough to demonstrate value without losing attention.",
                        "On the timeline, tap Add Clip at the point where you want the recording to start. Trim the clip edges to match the vertical format timing. The recording plays automatically on the device screen during playback.",
                    ]}
                />
                <Step
                    number="06"
                    title="Export and upload to Instagram."
                    description={[
                        "Export your Reel at 1080 × 1920 px resolution. Use H.264 encoding (standard MP4) for broad compatibility with Instagram's upload system.",
                        "Export at 30 fps — Instagram may stutter with higher frame rates. Keep the file under 100 MB if possible for faster uploads on mobile networks.",
                        "When uploading to Instagram: use the Reels tab, add trending audio or your own soundtrack, write a caption with relevant hashtags (#appdesign #protato #uidesign), and tag your app's account. Post at peak engagement times for your audience (typically 11 AM - 2 PM or 7 PM - 9 PM in their timezone).",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Grow your video toolkit.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to make an app promo video in minutes."
                        description="The same animation techniques work for horizontal 16:9 promos — adapt your Reel for YouTube and your website."
                        href="/guides/make-app-promo-video"
                    />
                    <ContinueCard
                        title="How to create App Preview videos for the App Store."
                        description="Your Reel can be repurposed as an App Store Preview with minor adjustments to meet Apple's guidelines."
                        href="/guides/app-preview-video-app-store"
                    />
                    <ContinueCard
                        title="How to create social media graphics for your app launch."
                        description="Pair your Reel with static social graphics across Instagram, Twitter, and LinkedIn for a coordinated launch."
                        href="/guides/social-media-graphics-app-launch"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Make an Instagram Reel for Your App",
                        "description": "Create engaging Instagram Reels with 3D device mockups, vertical 9:16 animations, camera orbits, text callouts, and screen recordings.",
                        "totalTime": "PT15M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Set up your vertical canvas.", "text": "Set aspect ratio to 9:19.5. Design at 1080x1920 px output. Position device in upper half of frame to leave room for text below." },
                            { "@type": "HowToStep", "position": 2, "name": "Build a vertical-optimized device mockup.", "text": "Use a high-contrast gradient background. Apply Dramatic lighting preset. Bright colors catch attention during fast scrolling." },
                            { "@type": "HowToStep", "position": 3, "name": "Create a short camera animation.", "text": "Switch to Animation mode. Set keyframes at 0s and 5s with a gentle orbit. 3-4 keyframes total for a 15-second Reel." },
                            { "@type": "HowToStep", "position": 4, "name": "Add text callouts timed to the motion.", "text": "Add 2-3 text overlays: app name at 0s, benefit at 5s, CTA at 12s. Fade opacity from 0 to 1 over 0.3 seconds." },
                            { "@type": "HowToStep", "position": 5, "name": "Add a screen recording clip.", "text": "Record a 5-10 second app flow. Tap Add Clip on the timeline and trim edges to match Reel timing." },
                            { "@type": "HowToStep", "position": 6, "name": "Export and upload to Instagram.", "text": "Export at 1080x1920 px, 30 fps, H.264 MP4. Add trending audio in Instagram. Use hashtags like #appdesign #protato #uidesign." }
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
