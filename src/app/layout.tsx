import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

// Self-hosted from npm (@fontsource-variable): no runtime call to Google Fonts.
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const interTight = localFont({
  src: "../../node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-KB9H2KSKFR";

export const metadata: Metadata = {
  metadataBase: new URL("https://studentofsales.wiki"),
  title: {
    default: "Student of Sales: a plan for your next career move in sales",
    template: "%s · Student of Sales",
  },
  description:
    "Skip the noise. For each move in a sales career: a practitioner's take on what changes, a short reading path, and one thing to try each week.",
  openGraph: {
    type: "website",
    siteName: "Student of Sales",
    url: "https://studentofsales.wiki",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 btn btn-primary">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter />
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
