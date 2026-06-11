import { FaqSection } from "@/components/faq";
import { AppStore, AppleLogoSvg, BriefCase, BubbleLeftRight, DeveloperCode, PaintPallete, Sparkles, TextBubble } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import IOSFeatures from "./ios-features";
import PricingCard from "./pricing";
import Footer2 from "./footer";
import { iosAppId, macAppId } from "../config";
import Backlinks from "./backlinks";
import UseCases from "./use-cases";

const roles = [
  {
    icon: <DeveloperCode className="w-8 h-8 fill-background" />,
    title: "Developers",
    description:
      "Generate App Store screenshots, documentation assets, and launch visuals in minutes — without waiting on a designer or learning 3D software.",
  },
  {
    icon: <PaintPallete className="w-8 h-8 fill-background" />,
    title: "Designers",
    description:
      "Fine-tune lighting, materials, and composition to present your UI work exactly the way you envisioned — on real devices.",
  },
  {
    icon: <TextBubble className="w-8 h-8 fill-background" />,
    title: "Content & Marketing",
    description:
      "Create scroll-stopping social visuals, landing page hero shots, and short product animations — no complex render pipelines or design handoffs.",
  },
  {
    icon: <BubbleLeftRight className="w-8 h-8 fill-background" />,
    title: "Product & Teams",
    description:
      "Keep demos, pitch decks, and internal updates consistent and polished — with mockups that look like the real shipped product.",
  },
  {
    icon: <BriefCase className="w-8 h-8 fill-background" />,
    title: "Founders & Operators",
    description:
      "Ship beautiful product visuals for launches, investor decks, and growth experiments — fast, without a dedicated design team.",
  },
];

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen scrollbar-hide">

      <main className="space-y-2 mx-auto max-w-screen-lg pt-30 md:pt-[5%] pb-[5%] px-3 rounded-4xl overflow-hidden">


        <div className="relative grow-progress-2 space-y-4">
          {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[30%]  z-10" /> */}

          <div className="relative  max-w-screen-lg px-4 mx-auto">
            <div className="relative z-10">
              <img
                src='/macos-light.avif'
                className="w-full rounded-xl w-full"
                style={{ objectFit: "contain" }}
              />
              <img
                src='/ios-light.avif'
                className="absolute z-20 -bottom-[5%] right-[2%] md:right-[0%] scale-[0.96] rounded-xl w-[30%]"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="absolute z-0 mx-auto bottom-10 left-[20%] w-[60%] h-[200px] 
  bg-gradient-to-br from-slate-600/80 via-slate-500/80 to-slate-400/80 
  blur-3xl"
            />
          </div>
          <div className="relative pb-5 space-y-4">
            <h1 className="relative mx-auto max-w-2xl text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-slate-600 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Turn Screenshots Into Studio-Quality 3D Mockups
              </span>
            </h1>
            <p className="text-center max-w-lg mx-auto text-xl">
              Drop in your screenshots or videos, adjust lighting and materials in real time, and export polished mockups ready for the App Store, social media, or your next pitch.
            </p>
          </div>
        </div>

        <div className="z-20 gap-4 flex flex-col lg:flex-row px-4 items-center justify-center">



          <div className='flex flex-wrap items-center justify-center flex-1 gap-2'>
            <Link
              href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
              <Button className="text-md fill-background rounded-full px-4">
                <AppStore  /> Download iOS app
              </Button>
            </Link>

            <Link
              href={`https://apps.apple.com/app/protato/id${macAppId}`}>
             <Button className="text-md fill-background rounded-full px-4">
                <AppStore /> Download macOS app
              </Button>
            </Link>
          </div>




        </div>


        <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-10">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">18+</p>
            <p className="text-sm text-muted-foreground">Device models</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">4K</p>
            <p className="text-sm text-muted-foreground">Export resolution</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">Real-time</p>
            <p className="text-sm text-muted-foreground">No render queue</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">Offline</p>
            <p className="text-sm text-muted-foreground">Works without internet</p>
          </div>
        </div>

      </main>

      <div className="bg-secondary relative w-full h-full">
        <IOSFeatures />
      </div>


      <div className="bg-[#111112] relative w-full">

        <div className="relative grow-progress max-w-screen-lg py-10 px-4 mx-auto">

          <img
            src='/macos-dark.avif'
            className="w-full z-10 relative rounded-xl w-full"
            style={{ objectFit: "contain", }}
          />


        </div>

        <div className='flex items-center justify-center flex-1 gap-2'>
          <Link
            href={`https://apps.apple.com/app/protato/id${macAppId}`}
            className="text-md font-medium text-blue-500 hover:text-blue-600"
          >
            Get it for Free on Mac App Store
          </Link>
          
        </div>

        <section className="text-background/90 grow-progress py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Purpose-built for everyone who ships apps and products
              </h2>
            </div>

            <div className="grid gap-y-12 gap-x-16 md:grid-cols-2">
              {roles.map((role) => (
                <div key={role.title} className="group">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {role.icon}
                    </span>
                    <span className="text-2xl md:text-2xl font-medium tracking-tight">
                      {role.title}
                    </span>
                  </div>

                  <p className="mt-4 opacity-80 text-lg leading-relaxed max-w-md">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      <UseCases />
      <PricingCard />
      {/* <PricingPlansPage /> */}
      <FaqSection />
      {/* <Footer /> */}

      <Backlinks/>
      <Footer2 />



    </div>
  );
}
