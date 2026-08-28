import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import { ImageFlow } from "@/components/custom-mdx"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
    title: "How to Build a Multi-Device Scene with iPhone, iPad & MacBook | Protato Guide",
    description:
        "Learn how to create a multi-device mockup scene with iPhone, iPad, and MacBook in Protato. Position devices, import screenshots per device, and export a polished hero shot.",
    openGraph: {
        type: "article",
        title: "How to Build a Multi-Device Scene with iPhone, iPad & MacBook | Protato Guide",
        description:
            "Learn how to create a multi-device mockup scene with iPhone, iPad, and MacBook in Protato. Position devices, import screenshots per device, and export a polished hero shot.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to build a multi-device scene with iPhone, iPad, and MacBook")}`, width: 1200, height: 630 }],
    },
}

export default function Guide02() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to build a multi-device scene with iPhone, iPad, and MacBook." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 02
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to build a multi-device scene with iPhone, iPad, and MacBook.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                One device is a screenshot. Multiple devices tell a story. Place iPhone, iPad, and MacBook in the same scene to create ecosystem hero shots, feature comparisons, or product family visuals.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone 17 Pro Max, iPad A16, MacBook Pro 14"</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A three-device scene with an iPhone, iPad, and MacBook, each showing different screens, positioned in a balanced composition, exported as a single image.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device list (add/remove), iPhone 17 / iPad A16 / MacBook Pro 14\" model picker, transform controls, media import per device, camera orbit/pan, still export, IBL (Image-Based Lighting), and lighting presets (Studio, Dramatic, Flat) with per-light sliders.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Multi-device scenes work best on Mac, where the three-column layout gives you full control over each device&apos;s position. You can start on iPhone and sync via iCloud.
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

            <div className="space-y-4">
                <Step
                    number="01"
                    title="Start with a single device and set your canvas."
                    description={[
                        "Open Protato and pick your primary device — iPhone 17 Pro Max is a natural starting point, but you can start with any model.",
                        "Set the aspect ratio to a wide canvas like 16:9 so you have room to place multiple devices without crowding. Choose a solid or gradient background that gives the scene depth.",
                    ]}
                />
                <ImageFlow
                    images={[
                        'https://res.cloudinary.com/diq74hzgo/image/upload/20260618_1119.jpg',
                    ]}
                    rounded="3xl"
                />
                <ImageFlow
                    images={[
                        'https://res.cloudinary.com/diq74hzgo/image/upload/20260618_1356.jpg',
                    ]}
                    rounded="3xl"
                />
                <Step
                    number="02"
                    title="Add a second and third device to the scene."
                    description={[
                        "On Mac: In the right inspector (Devices mode), click the + button below the device list. A sheet opens where you can choose the next model — pick an iPad A16 or iPhone 17 Pro Max color variant.",
                        "On iPhone: Tap the Devices button (phone icon above the canvas), then tap + to add another device.",
                        "Each new device appears in the scene with its own position, rotation, and screen content. They stack on top of each other initially — you will arrange them next.",
                    ]}
                />

                <ImageFlow
                    images={[
                        'https://res.cloudinary.com/diq74hzgo/image/upload/20260618_1120.jpg',
                    ]}
                    rounded="3xl"
                />
                <Step
                    number="03"
                    title="Position each device using transform controls."
                    description={[
                        "Select a device by tapping it on the canvas or clicking it in the device list. In the Transform section, adjust:",
                    ]}
                    items={[
                        "Scale — make secondary devices smaller to create depth (e.g., iPad A16 at 0.8x, MacBook Pro 14\" at 0.6x)",
                        "Yaw — rotate devices slightly toward each other for a natural conversation layout",
                        "Pitch — tilt devices at matching angles for a consistent look",
                        "Offset X/Y/Z — nudge each device into its final position without moving the camera",
                    ]}
                />

                
                <Step
                    number="04"
                    title="Import screenshots onto each device."
                    description={[
                        "Select a device, open the Media tab in settings, and import a screenshot. Each device can show a different screen — use this to highlight different features or views of your product.",
                        "On Mac, you can import screenshots directly from your device or from files by clicking the upload file button",
                    ]}
                />
                <ImageFlow
                    images={[
                        'https://res.cloudinary.com/diq74hzgo/image/upload/20260618_1122.jpg',
                    ]}
                    rounded="3xl"
                />
                <Step
                    number="05"
                    title="Adjust the lighting and export."
                    description={[
                        "Fine-tune how light hits each device using the Lighting section in the left sidebar. Choose from presets like Studio (balanced), Dramatic (strong contrasts), or Flat (even, soft). Adjust individual lights — Key, Fill, Rim, and Back — using sliders from 0 to 10,000, and tweak the global exposure multiplier.",
                        "For realistic reflections, enable IBL (Image-Based Lighting) which adds a virtual studio environment. This makes all devices in your scene look consistent and professional.",
                        "Once the lighting looks right, click the Export button in the toolbar. Choose PNG for transparency (useful if you want to composite the scene later) or JPEG for a ready-to-use file. Select quality scale (1×, 2×, or 3×) for sharper output.",
                        "The result is a single, polished multi-device hero shot — perfect for landing pages, pitch decks, or ecosystem marketing.",
                    ]}
                />
                <ImageFlow
                    images={[
                        'https://res.cloudinary.com/diq74hzgo/image/upload/20260618_1136.jpg',
                    ]}
                    rounded="3xl"
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Take the scene further.
                </p>
<div className="space-y-4">
                    <ContinueCard
                        title="How to create a product reveal video with keyframe animation."
                        description="Animate the multi-device scene — orbit between devices to create a cinematic product family reveal."
                        href="/guides/product-reveal-video"
                    />
                    <ContinueCard
                        title="How to polish your mockup with studio lighting and materials."
                        description="Make every device in the scene look consistent with shared lighting presets and material tweaks."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Label each device in a multi-device scene with feature callouts and add a hero headline that anchors the entire scene."
                        href="/guides/text-overlays-and-branding"
                    />
                    <ContinueCard
                        title="How to make an app promo video in minutes."
                        description="Create a cinematic promo video with keyframe animation, camera orbits, and timed text overlays."
                        href="/guides/make-app-promo-video"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to build a multi-device scene with iPhone, iPad, and MacBook.",
                        "description": "A three-device scene with an iPhone, iPad, and MacBook, each showing different screens, positioned in a balanced composition, exported as a single image.",
                        "totalTime": "PT15M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Start with a single device and set your canvas.",
                                "text": "Open Protato and pick your primary device. Set the aspect ratio to a wide canvas like 16:9 so you have room to place multiple devices without crowding."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Add a second and third device to the scene.",
                                "text": "On Mac, click the + button in the right inspector. On iPhone, tap the Devices button then tap +. Choose from iPhone 17, iPad A16, MacBook Pro 14\", and more."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Position each device using transform controls.",
                                "text": "Select a device and adjust Scale, Yaw, Pitch, and Offset X/Y/Z to arrange them in a balanced composition. Scale secondary devices smaller to create depth."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Import screenshots onto each device.",
                                "text": "Select a device, open the Media tab in settings, and import a screenshot. Each device can show a different screen to highlight different features of your product."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Adjust the lighting and export.",
                                "text": "Fine-tune lighting using presets (Studio, Dramatic, Flat) or adjust individual lights. Enable IBL for realistic reflections. Export as PNG or JPEG at 1x, 2x, or 3x quality."
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
        <div className="pt-10">
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
