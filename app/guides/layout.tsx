"use client"

import { usePathname } from "next/navigation"
import Nav from "../nav"
import Footer2 from "../(marketing)/footer"
import GuideSidebar from "./guide-sidebar"

export default function Layout({ children }: { children: any }) {
    const pathname = usePathname()
    const isGuidePage = pathname !== "/guides"

    if (!isGuidePage) {
        return (
            <div className="bg-background min-h-screen">
                <Nav />
                {children}
                <Footer2 />
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen">
            <Nav />
            <div className="lg:grid lg:grid-cols-[256px_1fr] lg:max-w-7xl lg:mx-auto">
                <GuideSidebar />
                <div className="min-w-0">
                    {children}
                </div>
            </div>
            <Footer2 />
        </div>
    )
}
