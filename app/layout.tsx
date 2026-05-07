import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { iosAppId } from "./config";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const siteConfig = {
  name: 'Protato — Mockup & Design Tool for iOS and macOS',
  description:
    'Create clean, high-quality mockups in seconds. A local-first design tool built for speed, simplicity, and control.',
  url: 'https://protato.app',
  ogImage: 'https://protato.app/opengraph.webp',
};

const metadata: Metadata = {
  title: {
    default: 'Protato',
    template: `%s`,
  },
  description: siteConfig.description,
  keywords: [
    'Protato',
    'mockup tool',
    'design mockups',
    'iOS mockup app',
    'macOS design tool',
    'device mockups',
    'app preview generator',
    'local-first design tool',
    'mockup creator',
    'UI presentation tool',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Protato Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


export {metadata};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-itunes-app" content={`app-id=${iosAppId}`} />
      </head>
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7L4RY4NDVG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-7L4RY4NDVG');
          `}
        </Script>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://protato.app",
              "name": siteConfig.name,
              "alternateName": "Protato 3D Mockup",
              "description": siteConfig.description,
              "publisher": {
                "@type": "Organization",
                "name": "Protato 3D Mockup",
                "url": "https://protato.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://protato.app/opengraph.webp",
                  "width": 1200,
                  "height": 630
                }
              }
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          enableColorScheme={true}
        >
          {children}
        </ThemeProvider>
          <Analytics/>
      </body>
    </html>
  );
}
