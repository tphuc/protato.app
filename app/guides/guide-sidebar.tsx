"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const clusters = [
    { name: "App Store", guides: [{ number: "01", title: "Make Screenshots", slug: "your-first-app-store-screenshot" }, { number: "02", title: "Screenshot Sizes", slug: "app-store-screenshot-sizes" }, { number: "03", title: "Screenshot Design", slug: "text-overlays-and-branding" }, { number: "04", title: "Screenshot Examples", slug: "3d-mockup-vs-flat-screenshot" }, { number: "05", title: "Subscription Apps", slug: "app-store-screenshots-subscription-app" }] },
    { name: "Mockups", guides: [{ number: "06", title: "iPhone Mockup", slug: "create-iphone-mockup" }, { number: "07", title: "MacBook Mockup", slug: "create-macbook-mockup" }, { number: "08", title: "SaaS Landing Page", slug: "mockups-for-saas-landing-page" }] },
    { name: "Video", guides: [{ number: "09", title: "App Promo Video", slug: "make-app-promo-video" }, { number: "10", title: "App Preview Requirements", slug: "app-preview-video-app-store" }] },
]

export default function GuideSidebar() {
    const currentSlug = usePathname().split("/").pop()
    return <aside className="hidden w-64 shrink-0 border-r border-border/40 lg:block"><nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto py-20 pl-6 pr-4"><Link href="/guides" className="mb-6 block text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">&larr; All Guides</Link><div className="space-y-6">{clusters.map((cluster) => <div key={cluster.name}><p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">{cluster.name}</p><div className="space-y-0.5">{cluster.guides.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`} className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${guide.slug === currentSlug ? "bg-blue-500/10 font-medium text-blue-500" : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"}`}><span className="mr-1.5 text-[10px] opacity-50">{guide.number}</span>{guide.title}</Link>)}</div></div>)}</div></nav></aside>
}
