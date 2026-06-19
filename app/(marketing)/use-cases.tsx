"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const useCases = [
    {
        label: "Devices",
        title: "Device frames & screen media",
        description:
            "Swap between 18+ iPhone, iPad, and MacBook models in a single tap. Load your screenshots or videos onto any device screen — it curves to match the display with realistic reflections and perspective.",
        slug: "device-frames",
          imageUrl: "/20260619_1743.avif",
      
    },
    {
        label: "Materials",
        title: "Material & reflection control",
        description:
            "Adjust metallic, roughness, clearcoat, and specular on every device independently. Switch between Glossy, Matte, or Default presets and see environment reflections update in real time on the device glass.",
        slug: "material-reflection",
        imageUrl: "/20260620_0112.avif",
      
    },
    {
        label: "Text",
        title: "Text overlays & typography",
        description:
            "Add headlines, callouts, and branding behind or in front of your device. Style fonts, apply gradient fills, add stroke outlines, and adjust opacity, scale, and position — all without leaving the canvas.",
        slug: "text-overlays",
        imageUrl: "/20260619_2044.avif",
    },
    {
        label: "Animation",
        title: "Keyframe animation & motion",
        description:
            "Record camera moves and device transforms on a frame-accurate timeline. Add keyframes with easing curves, layer synchronized media clips, and export a smooth product reveal video at up to 1440p.",
        slug: "animation-motion",
        imageUrl: "/20260620_0024.avif",
    },
    // {
    //     label: "Presets",
    //     title: "Scene presets & templates",
    //     description:
    //         "Save the full scene — devices, camera angle, lighting, materials, and text — as a named preset. Reuse it across campaigns or share presets as JSON files with your team for consistent launch visuals.",
    //     slug: "scene-presets",
    //     imageUrl: "/20260619_1744.jpeg",
    // },
    {
        label: "Background",
        title: "Backgrounds & canvas styling",
        description:
            "Choose from Solid, Gradient, Mesh, or Image backgrounds to match your brand identity. The gradient editor supports multi-stop color blends with directional control. Set to None for transparent PNG export with alpha.",
        slug: "background-styling",
        imageUrl: "/20260620_0031.avif",
    },
    {
        label: "Camera",
        title: "Camera framing & composition",
        description:
            "Orbit around your scene, pinch to zoom, and roll to find the perfect angle. Adjust the Field of View from telephoto (cinematic) to wide-angle (dramatic). Lock aspect ratio to 9:16, 16:9, or 1:1 for your target platform.",
        slug: "camera-framing",
        imageUrl: "/20260620_0036.avif",
    },
]

export default function UseCases() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="bg-secondary py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl mb-16">
                    <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
                        Use cases
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Workflows for every product showcase
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                        Device framing, materials, text, animation, backgrounds, and camera — all in one app.
                    </p>
                </div>

                {/* Desktop: side-by-side */}
                <div className="hidden md:flex bg-background rounded-3xl  gap-4 items-start">
                    <div className="w-[380px] p-4 md:p-10 shrink-0 divide-y divide-border/40">
                        {useCases.map((item, i) => (
                            <button
                                key={item.slug}
                                onClick={() => setActiveIndex(i)}
                                className="w-full text-left py-6 transition-all duration-300 group"
                            >
                                <div
                                    className={`transition-opacity duration-300 ${
                                        activeIndex === i
                                            ? "opacity-100"
                                            : "opacity-40 hover:opacity-60"
                                    }`}
                                >
                                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-1">
                                        {item.label}
                                    </p>
                                    <h3 className="text-xl font-semibold tracking-tight">
                                        {item.title}
                                    </h3>
                                    {activeIndex === i && (
                                        <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 flex items-center justify-center rounded-3xl overflow-hidden aspect-square relative">
                        {useCases.map((item, i) => (
                            <img
                                key={item.slug}
                                src={item.imageUrl}
                                alt={item.title}
                                style={{objectFit:"contain"}}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                    i === activeIndex
                                        ? "opacity-100"
                                        : "opacity-0 pointer-events-none"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile: shadcn accordion */}
                <div className="md:hidden space-y-3">
                    <Accordion type="single" collapsible defaultValue="0" className="bg-background rounded-3xl">
                        {useCases.map((item, i) => (
                            <AccordionItem
                                key={item.slug}
                                value={String(i)}
                                className="border-none rounded-2xl overflow-hidden"
                            >
                                <AccordionTrigger className="px-5 py-5 hover:no-underline [&[data-state=open]>svg]:text-foreground [&>svg]:size-5">
                                    <div className="flex-1 text-left">
                                        <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-0.5">
                                            {item.label}
                                        </p>
                                        <h3 className="text-lg font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-0">
                                    <div className="px-5 pb-5 space-y-4">
                                        <div className="rounded-xl overflow-hidden bg-secondary/30 relative">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/guides"
                        className="inline-flex bg-background px-4 py-2 rounded-full items-center gap-2 text-lg font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Explore all features
                        <span className="text-md font-medium" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
