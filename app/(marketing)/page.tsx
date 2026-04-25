import { FaqSection } from "@/components/faq";
import { AppleLogoSvg, BriefCase, BubbleLeftRight, DeveloperCode, PaintPallete, Sparkles, TextBubble } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import IOSFeatures from "./ios-features";
import PricingCard from "./pricing";
import Footer2 from "./footer";
import { iosAppId, macAppId } from "../config";

const roles = [
  {
    icon: <DeveloperCode className="w-8 h-8 fill-background" />,
    title: "Developers",
    description:
      "Turn screenshots and recordings into beautiful mockups for App Store pages, documentation, and launches.",
  },
  {
    icon: <PaintPallete className="w-8 h-8 fill-background" />,
    title: "Designers",
    description:
      "Refine lighting, materials, and composition to create visuals that match your product and design system.",
  },
  {
    icon: <TextBubble className="w-8 h-8 fill-background" />,
    title: "Content & Marketing",
    description:
      "Create polished visuals and short animations for landing pages, campaigns, and social content—without a complex setup.",
  },
  {
    icon: <BubbleLeftRight className="w-8 h-8 fill-background" />,
    title: "Product & Teams",
    description:
      "Build consistent mockups for demos, updates, and internal presentations across your workflow.",
  },
  {
    icon: <BriefCase className="w-8 h-8 fill-background" />,
    title: "Founders & Operators",
    description:
      "Generate high-quality visuals on demand for launches, pitches, and quick product updates.",
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
                style={{ objectFit: "contain", }}
              />
              <img
                src='/ios-light.avif'
                className="absolute z-20 -bottom-[5%] right-[2%] md:right-[0%] scale-[0.96] rounded-xl w-[30%]"
                style={{ objectFit: "contain", }}
              />
            </div>

            <div className="absolute z-0 mx-auto bottom-10 left-[20%] w-[60%] h-[200px] 
  bg-gradient-to-br from-slate-600/80 via-slate-500/80 to-slate-400/80 
  blur-3xl"
            />
          </div>
          <div className="relative pb-5 space-y-4">
            <h1 className="relative mx-auto max-w-xl text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-slate-600 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Create Studio Quality 3D Mockups In Seconds
              </span>
            </h1>
            <p className="text-center max-w-md mx-auto text-xl">
              Drop your screenshots or videos into real devices, tweak lighting, and export polished visuals
            </p>
          </div>
        </div>

        <div className="z-20 gap-4 flex flex-col lg:flex-row px-4 items-center justify-center">



          {/* <Link className="z-20 whitespace-nowrap border-1 dark:border-foreground shadow-xs inline-flex font-semibold items-center gap-2 rounded-full bg-gradient-to-b from-foreground/80 to-foreground  px-5 py-2 text-background hover:opacity-90" href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
            Download for iOS
            <AppleLogoSvg
              className={`h-4 w-4`}
            />
          </Link> */}

          <div className='flex items-center justify-center flex-1 gap-2'>
            <Link
              href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
              <Button className="text-md">
                 Download iOS app
              </Button>
            </Link>
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
              >
              <Button variant={'secondary'} className="text-md">
                 Download macOS app
              </Button>
            </Link>
          </div>

        <section className="text-background/90 grow-progress py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Protato gives you precision control to create high quality mockups
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


      <PricingCard />
      {/* <PricingPlansPage /> */}
      <FaqSection />
      {/* <Footer /> */}
      
      <div className="flex items-center justify-center py-4 border-t border-border/50 bg-secondary/50 border-b w-full overflow-x-scroll scrollbar-hide no-scrollbar">
        <a href="https://twelve.tools" target="_blank">
          <img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" width="200" height="54" />
        </a>
      </div>
      <Footer2 />



    </div>
  );
}
