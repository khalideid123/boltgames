import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "../public/fonts/outfit-regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "../public/fonts/outfit-bold.ttf", weight: "700", style: "normal" },
    {
      path: "../public/fonts/outfit-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Bolt Games — Independent Games. Lasting Impressions.",
    template: "%s | Bolt Games",
  },
  description: site.description,
  applicationName: "Bolt Games",
  openGraph: {
    title: "Bolt Games — Independent Games. Lasting Impressions.",
    description: site.description,
    type: "website",
    siteName: "Bolt Games",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Bolt Games",
    description: site.description,
  },
};
export const viewport: Viewport = {
  themeColor: "#11120f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
