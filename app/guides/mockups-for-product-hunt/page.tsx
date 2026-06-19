import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create Mockups for Your Product Hunt Launch | Protato Guide",
    description:
        "Create stunning device mockups for your Product Hunt launch. Stand out in the PH gallery with 3D device shots, multi-device scenes, and branded text overlays.",
    openGraph: {
        type: "article",
        title: "How to Create Mockups for Your Product Hunt Launch | Protato Guide",
        description:
            "Create stunning device mockups for your Product Hunt launch. Stand out in the PH gallery with 3D device shots, multi-device scenes, and branded text overlays.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create mockups for your Product Hunt launch")}`, width: 1200, height: 630 }],
    },
}

export default function Guide08() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create mockups for your Product Hunt launch." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 08
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create mockups for your Product Hunt launch.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Product Hunt is visual-first. The first image in your gallery becomes the thumbnail in every feed, collection, and newsletter. A strong 3D device mockup can be the difference between a scroll-by and a click-through.
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
                        A complete Product Hunt image set — a hero device mockup, a multi-device ecosystem shot, and branded text overlays — all sized and styled for the PH gallery.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device model picker, multi-device scene, text overlays, aspect ratio presets, lighting and materials, and PNG/JPEG export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Product Hunt launches work best when you have 4-6 polished images ready. Open Protato to build your set, or use this guide as a planning reference.
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
                    title="Understand Product Hunt's visual format."
                    description={[
                        "Product Hunt displays your first gallery image as the thumbnail across the site — in the homepage feed, topic collections, emails, and social shares. This single image does most of the visual work.",
                        "The gallery supports up to 10 images. They display in a 16:9 aspect ratio container, so design for 16:9 or 4:3 to avoid awkward cropping. Portrait 9:16 images get letterboxed, which wastes screen space.",
                        "Browse successful launches in your category before you start. Notice how the top posts use device mockups, consistent branding, and clear text overlays that are readable at thumbnail size.",
                    ]}
                />
                <Step
                    number="02"
                    title="Create a hero mockup that stands out."
                    description={[
                        "Start with a single device — the iPhone that matches your target audience. Import your app screenshot onto the screen.",
                        "Choose a bold, clean background. Gradients and mesh backgrounds work well because they add visual interest without distracting from the device. Avoid busy backgrounds that compete with the device at thumbnail size.",
                        "Set the aspect ratio to 16:9 in the Ratio tab. This matches Product Hunt's gallery container and ensures your full composition is visible without cropping.",
                        "Use the Dramatic lighting preset to make the device pop against the background. A darker background with strong rim lighting creates depth that reads well at small sizes.",
                    ]}
                />
                <Step
                    number="03"
                    title="Add your tagline as a text overlay."
                    description={[
                        "Add a text element with your product's one-liner — the same phrase that appears under your logo on Product Hunt. Keep it to 4-6 words so it's readable at thumbnail size.",
                        "Position the text in front of the device, below or beside it, depending on your composition. Use the Layout tab to fine-tune the placement.",
                        "Choose a font weight that's bold enough to read at small sizes (Semibold or Bold). If your background is dark, use white text; if light, use dark text. Add a subtle gradient fill to the text for a premium look.",
                    ]}
                />
                <Step
                    number="04"
                    title="Build a multi-device ecosystem shot."
                    description={[
                        "Product Hunt hunters respond well to ecosystem shots — iPhone + MacBook, or iPhone + iPad + MacBook. It signals that your product works across devices.",
                        "Follow the multi-device workflow: add devices one at a time, position them with transform controls, and import a relevant screenshot onto each screen.",
                        "Arrange the devices so they form a natural visual hierarchy — the primary device (usually iPhone) centered and slightly larger, with supporting devices angled toward it.",
                        "Apply the same lighting preset and background across all devices for a cohesive look. The Studio preset works well for multi-device scenes because it lights everything evenly.",
                    ]}
                />
                <Step
                    number="05"
                    title="Create supporting gallery images."
                    description={[
                        "Beyond the hero shot and ecosystem image, prepare 2-4 supporting frames that show different aspects of your product:",
                    ]}
                    items={[
                        "Feature close-up — zoom in on a key screen with a callout label",
                        "Onboarding flow — 2-3 devices showing the first-time user experience",
                        "Social proof — a mockup with a testimonial quote overlaid",
                        "Comparison — side-by-side before/after or old/new",
                    ]}
                />
                <Step
                    number="06"
                    title="Export and upload to Product Hunt."
                    description={[
                        "Export each image as JPEG (smaller file, faster loading) or PNG (higher quality). Use 2x quality scale for retina-sharp images.",
                        "Name your files descriptively: product-name-hero.jpg, product-name-ecosystem.jpg, etc. Product Hunt doesn't require specific dimensions, but 1920 × 1080 px (16:9) is a safe target that looks good on all screens.",
                        "When uploading to Product Hunt, order your images strategically: hero shot first (becomes the thumbnail), ecosystem shot second, feature details next. The first two images are visible without clicking into the gallery.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Take your Product Hunt visuals further.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Ecosystem shots are the most upvoted type of PH gallery image. Master multi-device positioning and composition."
                        href="/guides/multi-device-scene"
                    />
                    <ContinueCard
                        title="How to get professional 3D lighting on your mockup."
                        description="Make your hero device pop with dramatic lighting that reads well at thumbnail size."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to create mockups for your SaaS landing page."
                        description="Repurpose your PH hero shot as the hero image on your landing page — keep your visual consistent across channels."
                        href="/guides/mockups-for-saas-landing-page"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create Mockups for Your Product Hunt Launch",
                        "description": "Create stunning device mockups for your Product Hunt launch with 3D device shots, multi-device scenes, and branded text overlays.",
                        "totalTime": "PT20M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Understand Product Hunt's visual format.", "text": "Design for 16:9 aspect ratio. Your first gallery image becomes the thumbnail across the site, feeds, and emails." },
                            { "@type": "HowToStep", "position": 2, "name": "Create a hero mockup that stands out.", "text": "Set aspect ratio to 16:9. Use a gradient or mesh background with the Dramatic lighting preset for depth at thumbnail size." },
                            { "@type": "HowToStep", "position": 3, "name": "Add your tagline as a text overlay.", "text": "Add a 4-6 word text element with your product one-liner. Use bold weight, high contrast, and position in front of the device." },
                            { "@type": "HowToStep", "position": 4, "name": "Build a multi-device ecosystem shot.", "text": "Add iPhone plus MacBook or iPad. Position with transform controls. Apply consistent lighting and background across all devices." },
                            { "@type": "HowToStep", "position": 5, "name": "Create supporting gallery images.", "text": "Prepare 2-4 additional frames: feature close-ups, onboarding flow, social proof, or before/after comparisons." },
                            { "@type": "HowToStep", "position": 6, "name": "Export and upload to Product Hunt.", "text": "Export as JPEG or PNG at 2x quality. Target 1920x1080 px. Order images with hero first, ecosystem second, features next." }
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
