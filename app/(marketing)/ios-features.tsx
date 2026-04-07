import { Icloud, Shield, Sparkles, PaintPallete } from "@/components/icons"
import { Plus, Cpu, Camera, Layers, Box, Palette, Zap } from "lucide-react"
import Image from "next/image"
import {
    Hand,
    Download,
    Smartphone,
    Projector,
} from "lucide-react";

export default function IOSFeatures() {
    return (
        <section className="mx-auto max-w-4xl py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">

                {/* Large Hero Feature */}
                <div className="md:col-span-4 md:row-span-2 rounded-3xl flex flex-col gap-4 justify-end">
                    <div>
                        <p className="text-2xl md:text-4xl text-center font-semibold tracking-tight">
                            Create 3D mockups anywhere
                        </p>
                        <p className="text-muted-foreground text-center px-[10%]">
                            Import screenshots or videos and see them instantly rendered on real devices.
                        </p>
                    </div>

                    <div className="relative  aspect-[9/19] w-[300px] mx-auto  overflow-hidden">
                        {/* Image 1 */}
                        <div className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out opacity-100 animate-[fade1_16s_infinite]">
                            <Image
                                src="/ios_1.avif"
                                alt="iOS 1"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out opacity-0 animate-[fade2_16s_infinite]">
                            <Image
                                src="/ios_2.avif"
                                alt="iOS 2"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out opacity-0 animate-[fade3_16s_infinite]">
                            <Image
                                src="/ios_3.avif"
                                alt="iOS 3"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out opacity-0 animate-[fade4_16s_infinite]">
                            <Image
                                src="/ios_4.avif"
                                alt="iOS 4"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>


                    </div>
                </div>

                {/* Feature 1 */}
                <div className="rounded-3xl md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Hand className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Touch-first controls
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Orbit, pan, and adjust with simple gestures.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="rounded-3xl md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Projector className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Real-time preview
                        </p>
                        <p className="text-sm text-muted-foreground">
                            See lighting and reflections update instantly.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="rounded-3xl md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Download className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            High-quality exports
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Export images and videos in up to 4K, ready for sharing.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="rounded-3xl md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Smartphone className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Built for iPhone & iPad
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Optimized for mobile workflows, wherever you are.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}