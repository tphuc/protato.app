import { Icloud, Shield, Sparkles, PaintPallete } from "@/components/icons"
import { Plus, Cpu, Camera, Layers, Box, Palette, Zap, Clapperboard, Lightbulb } from "lucide-react"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">

                {/* Large Hero Feature */}
                <div className="md:col-span-4 md:row-span-2 rounded-3xl flex flex-col gap-4 justify-end">
                    <div>
                        <p className="text-2xl md:text-4xl text-center font-semibold tracking-tight">
                            Professional mockups. Right from your pocket.
                        </p>
                        <p className="text-muted-foreground text-center px-[10%]">
                            Import your screenshots or videos and see them instantly rendered on realistic 3D devices. Tweak lighting, swap models, and export — all in real time.
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
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Hand className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Touch-first controls
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Orbit, pan, and adjust your scene with intuitive gestures — no menu diving.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Projector className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Real-time preview
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Every change — lighting, materials, camera — updates instantly. No render queue.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Download className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Export up to 4K
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Export images and videos in up to 4K resolution, at 1x, 2x, or 3x — ready for any screen.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Smartphone className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Multiple devices, one scene
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Place iPhones, iPads, and MacBooks together in a single shot for rich product visuals.
                        </p>
                    </div>
                </div>

                {/* Feature 5 */}
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Clapperboard className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Animation timeline
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Record camera moves, add keyframes, and create cinematic product clips — all on device.
                        </p>
                    </div>
                </div>

                {/* Feature 6 */}
                <div className="rounded-3xl bg-background md:col-span-2 p-5 flex flex-col justify-between gap-2">
                    <Lightbulb className="w-8 h-8 text-foreground/90" />
                    <div>
                        <p className="font-semibold text-xl">
                            Studio lighting presets
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Switch between Studio, Dramatic, and Flat lighting with one tap — or fine-tune your own setup.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}