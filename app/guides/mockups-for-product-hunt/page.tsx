import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Save and Reuse Mockup Scenes with Presets | Protato Guide",
    description:
        "Save your full scene — devices, camera angle, lighting, materials, and text — as a reusable preset. Apply presets to new projects or share them with your team.",
    openGraph: {
        type: "article",
        title: "How to Save and Reuse Mockup Scenes with Presets | Protato Guide",
        description:
            "Save your full scene — devices, camera angle, lighting, materials, and text — as a reusable preset. Apply presets to new projects or share them with your team.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to save and reuse mockup scenes with presets")}`, width: 1200, height: 630 }],
    },
}

export default function Guide08() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to save and reuse mockup scenes with presets." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 08
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to save and reuse mockup scenes with presets.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Once you dial in the perfect lighting, camera angle, and device arrangement, you never want to rebuild it from scratch. Scene presets capture the entire scene so you can apply it to any project instantly — and keep every release visually consistent.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A reusable scene preset that saves your device setup, camera position, lighting, materials, and aspect ratio — ready to apply to any future project.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Scene presets panel, preset JSON import/export, auto-save, aspect ratio picker, and multi-device scene tools.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Scene presets are available now in Protato. Open the app to follow along — or use this guide as a reference for your preset workflow.
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
                    title="Understand what a preset captures."
                    description={[
                        "A scene preset saves the complete state of your current project — not just the device model, but every setting that defines the visual. When you apply a preset later, Protato restores everything exactly as you saved it.",
                    ]}
                    items={[
                        "Camera — FOV, distance, yaw, pitch, target offset",
                        "Devices — for each device: model name, position, scale, rotation, all material values (metallic, roughness, emissive, clearcoat, specular)",
                        "Aspect ratio — the canvas shape",
                        "Lighting — the active preset and all per-light intensities",
                    ]}
                />
                <Step
                    number="02"
                    title="Set up your scene before saving."
                    description={[
                        "Presets are most useful when the scene is polished and repeatable. Before saving, make sure your scene represents a look you'll want to reuse:",
                    ]}
                    items={[
                        "Choose a lighting preset and adjust individual light intensities to your taste",
                        "Position the camera at your preferred angle and FOV",
                        "Select the aspect ratio that matches your target platform (9:16, 16:9, 1:1)",
                        "Apply materials — metallic, roughness, clearcoat — to each device",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A preset replaces all current devices when applied, so save any work-in-progress separately before testing presets.
                    </p>
                </Step>
                <Step
                    number="03"
                    title="Save the current scene as a preset."
                    description={[
                        "In the Editor sidebar, find the Scene Presets section. Bundle presets are listed here by default, matched to your current aspect ratio.",
                        "To save your current scene, locate the save option in the presets panel. Give it a descriptive name — something that captures the visual style or campaign name, like 'Product Hunt Launch — Dramatic' or 'SaaS Hero — Flat Light'.",
                        "The preset is stored as a JSON file on your device. You can export it to share with your team or keep as a backup.",
                    ]}
                />
                <Step
                    number="04"
                    title="Apply a preset to a new project."
                    description={[
                        "Open a fresh project or navigate to an existing one. In the Scene Presets section, tap the preset you want to apply.",
                        "When you apply a preset: all current devices are removed, new devices are created from the preset data, the camera resets to the preset position, and the aspect ratio changes to match the preset.",
                        "After applying, the project window shows the new scene. From here, swap in your new screenshots via the Media tab, adjust the text overlay copy, and make any campaign-specific tweaks.",
                    ]}
                />
                <Step
                    number="05"
                    title="Export and share presets as JSON files."
                    description={[
                        "You can export the current scene as a preset JSON file. This file contains all the device, camera, material, and aspect ratio data in a portable format.",
                        "Share the JSON file with team members — they can import it into their Protato app and apply the exact same scene setup. This keeps multi-person campaigns visually consistent without manual recreation.",
                        "To import, place the JSON file in the presets directory or use the import option in the Scene Presets panel. The imported preset appears alongside your saved and bundled presets.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Build on your preset workflow.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to get professional 3D lighting on your mockup."
                        description="Fine-tune the lighting settings that your preset captures — master Studio, Dramatic, and Flat presets with per-light adjustments."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Multi-device setups are ideal candidates for presets. Build a reusable ecosystem shot once, apply it to every campaign."
                        href="/guides/multi-device-scene"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Add text layers that your preset can carry forward — headlines, callouts, and branding that stay consistent across projects."
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
                        "name": "How to Save and Reuse Mockup Scenes with Presets",
                        "description": "Save your full scene — devices, camera angle, lighting, materials, and text — as a reusable preset. Apply presets to new projects or share them with your team.",
                        "totalTime": "PT15M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Understand what a preset captures.", "text": "A preset captures camera position, devices with materials, aspect ratio, and lighting. When applied, it restores the full scene state." },
                            { "@type": "HowToStep", "position": 2, "name": "Set up your scene before saving.", "text": "Polish your lighting, camera angle, aspect ratio, and device materials before saving. A preset is most useful when the scene is refined and repeatable." },
                            { "@type": "HowToStep", "position": 3, "name": "Save the current scene as a preset.", "text": "Use the Scene Presets section in the Editor sidebar to save your scene. Give it a descriptive name matching the visual style or campaign." },
                            { "@type": "HowToStep", "position": 4, "name": "Apply a preset to a new project.", "text": "Open a project and tap a preset to apply it. All devices are replaced, camera and aspect ratio reset to the saved values, and materials are restored." },
                            { "@type": "HowToStep", "position": 5, "name": "Export and share presets as JSON files.", "text": "Export the scene as a JSON file and share it with your team. Import the file to apply the same scene setup across multiple projects." }
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
