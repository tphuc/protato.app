import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create an iPhone Mockup | Protato Guide",
    description:
        "Learn how to create a professional iPhone mockup for your app. Choose the right model, import your screenshot, adjust lighting and background, and export a polished 3D device image.",
    openGraph: {
        type: "article",
        title: "How to Create an iPhone Mockup | Protato Guide",
        description:
            "Learn how to create a professional iPhone mockup for your app. Choose the right model, import your screenshot, adjust lighting and background, and export a polished 3D device image.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create an iPhone mockup")}`, width: 1200, height: 630 }],
    },
}

export default function Guide16() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create an iPhone mockup." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 16
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create an iPhone mockup.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                An iPhone mockup puts your app screen inside a realistic 3D iPhone frame. It instantly makes your screenshot look professional, builds trust with viewers, and helps your app stand out on the App Store, your website, and social media.
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
                        A polished iPhone mockup with your screenshot on the screen, a professional background, balanced lighting, and export settings ready for production use.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device model picker, aspect ratio presets, media import, background tab, lighting presets, material controls, orbit and pan modes, and PNG/JPEG export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    iPhone mockups are the most requested format in Protato. The process takes about 5 minutes. Open the app and follow along.
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
                    title="Choose your iPhone model and color."
                    description={[
                        "When you open Protato, the default scene loads with the latest iPhone model. If you want a different iPhone, tap the Devices button (phone icon above the canvas on iPhone, or the device list in the right panel on Mac).",
                        "Choose from iPhone 15 Pro Max, iPhone 17, iPhone 17 Air, or iPhone 17 Pro Max. Each model has multiple color options — pick one that complements your app's UI. For example, a white iPhone works well with dark mode UI, while a black iPhone suits light backgrounds.",
                        "The color of the iPhone frame affects the overall perception of your mockup. Match the device color to your brand palette or the dominant color in your screenshot.",
                    ]}
                />
                <Step
                    number="02"
                    title="Set up the canvas with the right aspect ratio."
                    description={[
                        "Open the Settings sheet and go to the Ratio tab. Choose a canvas shape that matches your target output:",
                    ]}
                    items={[
                        "9:16 — portrait orientation, ideal for App Store screenshots and social media stories",
                        "16:9 — widescreen, good for website hero images and presentations",
                        "1:1 — square, perfect for Instagram posts and social media graphics",
                        "9:19.5 — full phone screen ratio, matches the 6.9-inch iPhone display exactly",
                    ]}
                />
                <Step
                    number="03"
                    title="Import your screenshot onto the screen."
                    description={[
                        "Open the Settings sheet and go to the Media tab. Tap the import button and select your app screenshot from Photos or Files. The image appears on the iPhone screen instantly, curved to match the display with realistic reflections.",
                        "If the screenshot doesn't fit perfectly, adjust the device position in Pan mode or use the Transform tab to fine-tune the scale and offset. The screenshot wraps around the phone's curved edges automatically for a realistic look.",
                    ]}
                />
                <Step
                    number="04"
                    title="Adjust the camera angle and device position."
                    description={[
                        "The default camera angle is a straight-on 3/4 view. For App Store screenshots, a slight 3/4 angle (not completely flat) looks more professional and shows off the iPhone's 3D design.",
                        "Switch to Orbit mode and drag to rotate around the phone. Find an angle that shows the screen content clearly while giving the device visual depth. Avoid extreme angles that distort the screen content.",
                        "In Pan mode, drag to center the device in the frame. Leave some space around the edges — you'll add background treatment next, and the device shouldn't touch the canvas borders.",
                    ]}
                />
                <Step
                    number="05"
                    title="Choose a background and lighting."
                    description={[
                        "Go to the Background tab and choose a style that complements your app:",
                    ]}
                    items={[
                        "Gradient — 80+ presets available. Best for social media and marketing. Pick colors that match your app's palette.",
                        "Mesh — smooth blended gradients like Apple's style. Gives a premium, contemporary look suitable for hero images.",
                        "Solid — single brand color. Cleanest option for App Store screenshots where the focus should be on the device.",
                        "Image — a photo from your library. Use for lifestyle contexts or pitch decks where the device sits in a real environment.",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed">
                        For lighting, the Studio preset works well for most iPhone mockups. If you want the phone to stand out more, try the Dramatic preset — it adds contrast with stronger rim lighting that separates the device from the background.
                    </p>
                </Step>
                <Step
                    number="06"
                    title="Export your finished iPhone mockup."
                    description={[
                        "Tap the Export button. Choose your format and quality:",
                    ]}
                    items={[
                        "PNG — highest quality, preserves transparency if background is set to None",
                        "JPEG — smaller file size, good for web and App Store uploads",
                        "1x, 2x, 3x — quality scale. 2x or 3x for sharp results on retina displays",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed">
                        After export, your iPhone mockup is ready to use. Drop it into your website hero section, upload it as an App Store screenshot, share it on social media, or include it in a pitch deck. The 3D device frame does the job of communicating professionalism before anyone reads a single word of text.
                    </p>
                </Step>
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Take your iPhone mockup further.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create a MacBook mockup."
                        description="Your iPhone mockup shows the mobile app. A MacBook mockup shows the desktop or web version — cover both platforms."
                        href="/guides/create-macbook-mockup"
                    />
                    <ContinueCard
                        title="How to get professional 3D lighting on your mockup."
                        description="Fine-tune the lighting on your iPhone mockup for a truly premium look."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to export transparent PNG mockups."
                        description="Export your iPhone mockup with a transparent background for maximum flexibility in compositing."
                        href="/guides/export-transparent-png-mockups"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create an iPhone Mockup",
                        "description": "Create a professional iPhone mockup with your app screenshot on a 3D device frame, proper background, lighting, and export settings.",
                        "totalTime": "PT5M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Choose your iPhone model and color.", "text": "Pick from iPhone 15 Pro Max, 17, 17 Air, or 17 Pro Max. Choose a color that complements your app's UI." },
                            { "@type": "HowToStep", "position": 2, "name": "Set up the canvas with the right aspect ratio.", "text": "Choose 9:16 for App Store, 16:9 for web, 1:1 for social media, or 9:19.5 for full phone screen ratio." },
                            { "@type": "HowToStep", "position": 3, "name": "Import your screenshot onto the screen.", "text": "Go to the Media tab and import your screenshot. It appears on the device instantly with realistic reflections and curved edges." },
                            { "@type": "HowToStep", "position": 4, "name": "Adjust the camera angle and device position.", "text": "Use Orbit mode to find a 3/4 angle that shows screen content clearly. Use Pan mode to center the device with space around edges." },
                            { "@type": "HowToStep", "position": 5, "name": "Choose a background and lighting.", "text": "Select Gradient, Mesh, Solid, or Image background. Use Studio lighting preset for balanced results or Dramatic for more contrast." },
                            { "@type": "HowToStep", "position": 6, "name": "Export your finished iPhone mockup.", "text": "Choose PNG or JPEG format. Select 2x or 3x quality scale for retina displays. Your mockup is ready for web, App Store, or social media." }
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
