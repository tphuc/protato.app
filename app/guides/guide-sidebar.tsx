"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const clusters = [
    {
        name: "Getting Started",
        guides: [
            { number: "01", title: "First App Store Screenshot", slug: "your-first-app-store-screenshot" },
            { number: "02", title: "Multi-Device Scene", slug: "multi-device-scene" },
        ],
    },
    {
        name: "Features",
        guides: [
            { number: "03", title: "Product Reveal Video", slug: "product-reveal-video" },
            { number: "04", title: "3D Lighting & Materials", slug: "studio-lighting-and-materials" },
            { number: "05", title: "Text Overlays & Branding", slug: "text-overlays-and-branding" },
        ],
    },
    {
        name: "Reference",
        guides: [
            { number: "06", title: "Screenshot Sizes 2026", slug: "app-store-screenshot-sizes" },
            { number: "07", title: "Export Transparent PNG", slug: "export-transparent-png-mockups" },
        ],
    },
    {
        name: "Use Cases",
        guides: [
            { number: "08", title: "Product Hunt Launch", slug: "mockups-for-product-hunt" },
            { number: "09", title: "SaaS Landing Page", slug: "mockups-for-saas-landing-page" },
            { number: "10", title: "Hero Image for Website", slug: "hero-image-for-app-website" },
            { number: "11", title: "Dribbble & Behance", slug: "showcase-app-on-dribbble" },
            { number: "12", title: "Social Media Graphics", slug: "social-media-graphics-app-launch" },
        ],
    },
    {
        name: "Video & Animation",
        guides: [
            { number: "13", title: "App Promo Video", slug: "make-app-promo-video" },
            { number: "14", title: "Instagram Reel", slug: "instagram-reel-app-mockup" },
            { number: "15", title: "App Preview Video", slug: "app-preview-video-app-store" },
        ],
    },
    {
        name: "Platform Deep-Dives",
        guides: [
            { number: "16", title: "iPhone Mockup", slug: "create-iphone-mockup" },
            { number: "17", title: "MacBook Mockup", slug: "create-macbook-mockup" },
        ],
    },
    {
        name: "Comparisons",
        guides: [
            { number: "18", title: "3D Mockup vs Flat Screenshot", slug: "3d-mockup-vs-flat-screenshot" },
        ],
    },
]

export default function GuideSidebar() {
    const pathname = usePathname()
    const currentSlug = pathname.split("/").pop()

    return (
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border/40">
            <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto py-20 pr-4 pl-6">
                <Link
                    href="/guides"
                    className="block text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6 hover:text-foreground transition-colors"
                >
                    &larr; All Guides
                </Link>
                <div className="space-y-6">
                    {clusters.map((cluster) => (
                        <div key={cluster.name}>
                            <p className="text-[10px] font-semibold text-muted-foreground/50 tracking-widest uppercase mb-2">
                                {cluster.name}
                            </p>
                            <div className="space-y-0.5">
                                {cluster.guides.map((guide) => {
                                    const isActive = guide.slug === currentSlug
                                    return (
                                        <Link
                                            key={guide.slug}
                                            href={`/guides/${guide.slug}`}
                                            className={`block text-sm py-1.5 px-2 rounded-md transition-colors ${
                                                isActive
                                                    ? "bg-blue-500/10 text-blue-500 font-medium"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                                            }`}
                                        >
                                            <span className="mr-1.5 text-[10px] opacity-50">{guide.number}</span>
                                            {guide.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </aside>
    )
}
