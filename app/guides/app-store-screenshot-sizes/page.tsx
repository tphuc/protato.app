import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "App Store Screenshot Sizes & Requirements 2026 | Protato Guide",
    description:
        "Complete reference for App Store and Google Play screenshot sizes in 2026. Includes iPhone 6.9\", iPad Pro, dimension tables, format requirements, and upload steps.",
    openGraph: {
        type: "article",
        title: "App Store Screenshot Sizes & Requirements 2026 | Protato Guide",
        description:
            "Complete reference for App Store and Google Play screenshot sizes in 2026. Includes iPhone 6.9\", iPad Pro, dimension tables, format requirements, and upload steps.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("App Store screenshot sizes & requirements 2026")}`, width: 1200, height: 630 }],
    },
}

const sizes = [
    { platform: "iPhone 6.9\" (16 Pro Max / 17 Pro Max)", portrait: "1320 × 2868", landscape: "2868 × 1320", notes: "Required for modern listings. Apple scales down for smaller phones automatically." },
    { platform: "iPhone 6.7\" (16 Pro / 17)", portrait: "1290 × 2796", landscape: "2796 × 1290", notes: "Accepted fallback if 6.9\" set is not provided." },
    { platform: "iPhone 6.5\" (16/17 Plus)", portrait: "1242 × 2688", landscape: "2688 × 1242", notes: "Legacy size — still accepted." },
    { platform: "iPhone 5.5\" (SE / 8 Plus)", portrait: "1242 × 2208", landscape: "2208 × 1242", notes: "Legacy size." },
    { platform: "iPad Pro 13\"", portrait: "2064 × 2752", landscape: "2752 × 2064", notes: "Required if your app supports iPad." },
    { platform: "iPad Pro 12.9\"", portrait: "2048 × 2732", landscape: "2732 × 2048", notes: "Legacy iPad size." },
    { platform: "iPad 10.5\" / 11\"", portrait: "1668 × 2224", landscape: "2224 × 1668", notes: "Mid-size iPad." },
    { platform: "iPad 9.7\" / 10.2\"", portrait: "1536 × 2048", landscape: "2048 × 1536", notes: "Entry-level iPad." },
    { platform: "Google Play Phone", portrait: "1080 × 1920 min", landscape: "1920 × 1080 min", notes: "16:9 to 9:16 aspect ratio. Up to 3840px." },
    { platform: "Google Play Tablet", portrait: "1080 × 1920 min", landscape: "1920 × 1080 min", notes: "Required for tablet visibility." },
]

export default function Guide06() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            {/* IMAGE BRIEF: Add a clean visual size-reference hero showing iPhone and iPad device outlines with portrait pixel dimensions beside each. Use a simple neutral background; the image should clarify, not duplicate, the table below. */}

            <GuideBreadcrumb title="App Store Screenshot Sizes & Requirements 2026" />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 06
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                App Store Screenshot Sizes & Requirements 2026.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                One wrong pixel dimension and App Store Connect rejects your upload with a generic error. Here is every size you need for 2026, the format requirements, and how to export from Protato.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">6 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll learn
                    </p>
                    <p className="text-base leading-relaxed">
                        Every required screenshot dimension for iPhone and iPad, the exact format spec Apple and Google expect, and how to set up Protato to export store-ready assets without trial and error.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Protato aspect ratio presets, export format and quality settings, App Store Connect media manager, and Google Play Console store listing.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Protato ships with all aspect ratio presets matching these sizes. Open the app to follow along, or use this page as a standalone reference.
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
                {/* Step 1 — size reference table */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Reference
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        Complete screenshot size reference table.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                        Apple now lets you upload one size (the 6.9&quot; iPhone) and scales it down for smaller devices automatically. iPad sets still need their own uploads. Google Play accepts any resolution between 320px and 3840px within a 16:9 to 9:16 ratio.
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-border/60">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary/30 border-b border-border/60">
                                    <th className="text-left p-4 font-semibold">Device Class</th>
                                    <th className="text-left p-4 font-semibold">Portrait (px)</th>
                                    <th className="text-left p-4 font-semibold">Landscape (px)</th>
                                    <th className="text-left p-4 font-semibold hidden md:table-cell">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map((row, i) => (
                                    <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-secondary/10">
                                        <td className="p-4 font-medium">{row.platform}</td>
                                        <td className="p-4 text-muted-foreground">{row.portrait}</td>
                                        <td className="p-4 text-muted-foreground">{row.landscape}</td>
                                        <td className="p-4 text-muted-foreground text-xs hidden md:table-cell">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Step
                    number="01"
                    title="Know the iPhone sizes for 2026."
                    description={[
                        "Apple requires the 6.9-inch iPhone size (1320 × 2868 px) as the primary set. Uploading this one size covers all iPhone models from the 6.9-inch down to the 5.5-inch — Apple scales it automatically.",
                        "If you want to support older devices separately, you can still upload the legacy 6.7-inch (1290 × 2796), 6.5-inch (1242 × 2688), and 5.5-inch (1242 × 2208) sets, but the 6.9-inch set alone is sufficient.",
                        "All screenshots should be in portrait orientation unless your app is landscape-only (games, video editors). Portrait screenshots get more vertical space in search results.",
                    ]}
                />

                <Step
                    number="02"
                    title="Know the iPad sizes."
                    description={[
                        "If your app runs on iPad, you need a separate screenshot set. The primary size is the iPad Pro 13-inch (2064 × 2752 px portrait). Like iPhones, Apple scales one iPad set down for smaller iPad models.",
                        "The 12.9-inch (2048 × 2732), 11-inch (1668 × 2224), and 9.7-inch (1536 × 2048) sizes are accepted as legacy alternatives if you prefer to upload specific sizes.",
                    ]}
                />

                <Step
                    number="03"
                    title="Format your images correctly."
                    description={[
                        "App Store and Google Play have strict format requirements. A rejected upload almost always means one of these is wrong:",
                    ]}
                    items={[
                        "Format — PNG or JPEG. PNG preserves quality, JPEG produces smaller files.",
                        "Color space — RGB only. CMYK or any other color profile will be rejected.",
                        "Alpha channel — None. App Store Connect rejects images with transparency. Export without alpha.",
                        "File size — Under 8 MB per image. For JPEG, a quality setting around 80-90% keeps files under the limit while maintaining good quality.",
                        "Status bar — Use a clean status bar (9:41, full battery, full signal). Fake it in the simulator or use a status bar overlay.",
                    ]}
                />

                <Step
                    number="04"
                    title="Set up Protato with the right aspect ratio."
                    description={[
                        "Open the Settings sheet and go to the Ratio tab. Protato has presets matching all standard store sizes:",
                    ]}
                    items={[
                        "9:19.5 — matches the 6.9-inch iPhone portrait aspect ratio",
                        "9:16 — matches 16:9 portrait ratio, useful for Google Play",
                        "16:9 — widescreen, used for landscape iPad shots",
                        "3:4 — matches iPad portrait ratios approximately",
                        "Choose the preset that matches your target device, then compose your scene around that canvas.",
                    ]}
                />

                <Step
                    number="05"
                    title="Export at the correct resolution."
                    description={[
                        "Protato exports at 1×, 2×, or 3× quality scale relative to the canvas. For App Store screenshots, 2× or 3× produces the sharpest results at the pixel dimensions the store expects.",
                        "In the export sheet, choose PNG for lossless quality or JPEG for smaller files. Make sure your background is set to a solid color or gradient — a transparent (None) background may produce an alpha channel that App Store Connect rejects.",
                        "After export, verify the image dimensions in Finder (Mac) or Photos (iPhone) before uploading. A quick dimension check saves the frustration of a silent reject.",
                    ]}
                />

                <Step
                    number="06"
                    title="Upload to App Store Connect or Google Play Console."
                    description={[
                        "App Store Connect: Go to My Apps → your app → the version → Previews and Screenshots. Select the 6.9-inch iPhone tab and drag your screenshots in order. The first 2-3 frames appear in search results, so put your strongest screens first.",
                        "Google Play Console: Go to Store presence → Main store listing. Phone screenshots are required (minimum 2, maximum 8). Tablet sets are required if your app supports tablets.",
                        "Pro tip: Preview on an actual phone before submitting. A layout that looks great at 100% on a 27-inch monitor often falls apart at thumbnail size (~200 px wide in search).",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed mt-4">
                        Once uploaded, use Apple&apos;s Product Page Optimization or Google&apos;s Experiments to A/B test which screenshots perform best. A statistically significant test typically needs 2-4 weeks and at least 1,000 impressions per variant.
                    </p>
                </Step>
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Apply the sizes to a real project.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create your first App Store screenshot on iPhone."
                        description="Put the sizes to work — create a complete screenshot project from scratch with the right canvas, background, and export settings."
                        href="/guides/your-first-app-store-screenshot"
                    />
                    <ContinueCard
                        title="How to export transparent PNG mockups."
                        description="Need compositable assets for your website or pitch deck? Learn the exact export settings for transparent-background mockups."
                        href="/guides/export-transparent-png-mockups"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Add headlines and feature callouts to your store screenshots that fit within the size constraints."
                        href="/guides/text-overlays-and-branding"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "App Store Screenshot Sizes & Requirements 2026",
                        "description": "Complete reference for App Store and Google Play screenshot sizes and format requirements.",
                        "totalTime": "PT10M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Know the iPhone sizes for 2026.",
                                "text": "Apple requires the 6.9-inch iPhone size (1320 × 2868 px) as the primary set. Uploading this one size covers all iPhone models down to the 5.5-inch."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Know the iPad sizes.",
                                "text": "If your app runs on iPad, you need a separate set. The primary size is iPad Pro 13-inch (2064 × 2752 px). Apple scales one iPad set down for smaller models."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Format your images correctly.",
                                "text": "Use PNG or JPEG, RGB color space, no alpha channel, under 8 MB per image. Use a clean status bar (9:41, full battery)."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Set up Protato with the right aspect ratio.",
                                "text": "Open the Ratio tab in Settings and choose a preset matching your target device: 9:19.5 for iPhone portrait, 16:9 for landscape, 3:4 for iPad."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Export at the correct resolution.",
                                "text": "Use 2x or 3x quality scale for sharp results. Verify dimensions after export before uploading."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 6,
                                "name": "Upload to App Store Connect or Google Play Console.",
                                "text": "Use the 6.9-inch tab in App Store Connect and drag screenshots in order. First 2-3 frames appear in search results — put your strongest screens first."
                            }
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
