import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Showcase Your App on Dribbble and Behance | Protato Guide",
    description:
        "Create stunning Dribbble and Behance shots for your app. Learn presentation layouts, device mockup composition, multiple-angle displays, and export settings for design portfolios.",
    openGraph: {
        type: "article",
        title: "How to Showcase Your App on Dribbble and Behance | Protato Guide",
        description:
            "Create stunning Dribbble and Behance shots for your app. Learn presentation layouts, device mockup composition, multiple-angle displays, and export settings for design portfolios.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to showcase your app on Dribbble and Behance")}`, width: 1200, height: 630 }],
    },
}

export default function Guide11() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to showcase your app on Dribbble and Behance." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 11
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to showcase your app on Dribbble and Behance.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Dribbble and Behance are where designers and founders discover new products. A well-presented app mockup can generate signups, press interest, and partnership opportunities — but only if it stands out in a feed of thousands.
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
                        A portfolio-ready shot set — a hero device mockup, multiple angle variants, a presentation layout, and annotated feature views — all designed for Dribbble and Behance.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use</p>
                    <p className="text-base leading-relaxed">
                        Orbit and Pan modes, lighting presets, material controls, multi-device scene, text overlays, background types, and high-resolution export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Dribbble shots are 800 × 600 px by default. Design at 2x for retina clarity. Open Protato and build your portfolio piece.
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
                    title="Know the Dribbble and Behance shot formats."
                    description={[
                        "Dribbble displays shots at 800 × 600 px in the feed, with a 4:3 aspect ratio. Behance uses a wider 16:9 format for project covers. Design for 1600 × 1200 px (2x Dribbble) and 2880 × 1620 px (2x Behance) for retina-sharp uploads.",
                        "On Dribbble, the first image in your shot becomes the thumbnail across the site — similar to Product Hunt in that one image does most of the work. On Behance, the cover image determines whether someone clicks into your full project.",
                        "Both platforms reward high-contrast, bold visuals. A 3D device mockup with a dramatic gradient background and clear text overlay consistently outperforms flat screenshots in engagement metrics.",
                    ]}
                />
                <Step
                    number="02"
                    title="Create a compelling hero device mockup."
                    description={[
                        "Design at 4:3 aspect ratio for Dribbble (1600 × 1200 px) or 16:9 for Behance (2880 × 1620 px). Choose a device that represents your primary platform.",
                        "Import your most visually impressive app screen. Use the Dramatic lighting preset to create contrast that reads well at feed thumbnail size.",
                        "Choose a background that pops but doesn't compete. Mesh gradients are popular in design portfolios because they look premium and contemporary. Pick a color palette that complements your app's UI colors.",
                    ]}
                />
                <Step
                    number="03"
                    title="Add multiple device angles for visual variety."
                    description={[
                        "A single angle is good. Multiple angles with the same device create a professional presentation feel and show off your 3D scene skills.",
                        "Export the same device setup from 3-4 different camera angles by using Orbit mode. For example: a front-facing shot, a 3/4 angle, a top-down perspective, and a close-up of the screen.",
                        "Keep the background and lighting consistent across all angles — changing these between shots makes the set look disconnected. Only the camera position should change.",
                        "If you want to show different app screens, create separate projects with the same background and lighting preset applied to each. Consistency is what makes a shot set look professional.",
                    ]}
                />
                <Step
                    number="04"
                    title="Build a presentation layout."
                    description={[
                        "Dribbble and Behance allow multiple images per shot. Arrange your exported angles into a presentation flow that tells a visual story:",
                    ]}
                    items={[
                        "Shot 1 — Hero device on a premium background with your app name as text overlay",
                        "Shot 2 — Same device from a different angle, highlighting a specific feature",
                        "Shot 3 — Close-up of the screen with annotation or context",
                        "Shot 4 — Multi-device or lifestyle context showing the app in use",
                        "Shot 5 — Color palette, UI elements, or design system details if relevant",
                    ]}
                />
                <Step
                    number="05"
                    title="Add context and annotations."
                    description={[
                        "Design portfolios benefit from context. Add text overlays that explain what each shot shows — feature names, UX patterns, or design decisions.",
                        "Use the Text Editor to add small annotation labels near specific UI elements. Keep font sizes smaller for annotations (12-14px equivalent) and larger for hero text (24-36px equivalent).",
                        "Include a final shot showing your color palette, typography choices, and key UI components if you're posting as a design case study. This signals depth and attracts higher-quality engagement from other designers.",
                    ]}
                />
                <Step
                    number="06"
                    title="Export and upload to your portfolio."
                    description={[
                        "Export each shot as PNG for maximum quality — Dribbble and Behance compress images, so starting with a high-quality source ensures the best final result. Use 2x resolution so the images look sharp on retina displays.",
                        "Upload to Dribbble: create a new shot, drag images in order, write a description that includes keywords like \"app design,\" \"mobile UI,\" \"iOS design,\" and \"dark mode\" if applicable. Tag relevant tools like Protato in the description.",
                        "Upload to Behance: create a new project, arrange your images in a grid or full-width layout, and write a longer description that walks through your design process. Link back to your app's website or Product Hunt page.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Build your design portfolio further.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to get professional 3D lighting on your mockup."
                        description="Make your portfolio shots stand out with studio-grade lighting that impresses other designers."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to create a hero image for your app website."
                        description="Use the same hero composition from your Dribbble shot as your website's hero — consistent visual identity across platforms."
                        href="/guides/hero-image-for-app-website"
                    />
                    <ContinueCard
                        title="How to create mockups for your Product Hunt launch."
                        description="Repurpose your Dribbble shot for Product Hunt — the same 3D mockup works across both platforms."
                        href="/guides/mockups-for-product-hunt"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Showcase Your App on Dribbble and Behance",
                        "description": "Create stunning Dribbble and Behance portfolio shots for your app using 3D device mockups and professional presentation layouts.",
                        "totalTime": "PT25M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Know the Dribbble and Behance shot formats.", "text": "Dribbble uses 4:3 (800x600 px), Behance uses 16:9. Design at 2x for retina sharpness." },
                            { "@type": "HowToStep", "position": 2, "name": "Create a compelling hero device mockup.", "text": "Design at 1600x1200 px (Dribbble) or 2880x1620 px (Behance). Use Dramatic lighting and a mesh gradient background." },
                            { "@type": "HowToStep", "position": 3, "name": "Add multiple device angles for visual variety.", "text": "Export 3-4 camera angles of the same device using Orbit mode. Keep background and lighting consistent across all shots." },
                            { "@type": "HowToStep", "position": 4, "name": "Build a presentation layout.", "text": "Arrange shots in a flow: hero, different angle, close-up, lifestyle context, and design details." },
                            { "@type": "HowToStep", "position": 5, "name": "Add context and annotations.", "text": "Add text overlays explaining features, UX patterns, and design decisions. Include a color palette shot for case studies." },
                            { "@type": "HowToStep", "position": 6, "name": "Export and upload to your portfolio.", "text": "Export as PNG at 2x resolution. Upload to Dribbble or Behance with keyword-rich descriptions." }
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
