import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import FooterSection from "@/components/footer-one";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gas & Heating Services in Weston-super-Mare | Local Boiler & Heating Expert",
  description:
    "Trusted local gas and heating engineer in Weston-super-Mare. Expert in boiler servicing, heating repairs, radiator installation and smart boiler controls. Call for reliable service today!",
  keywords: [
    "gas engineer Weston-super-Mare",
    "boiler repair Weston-super-Mare",
    "heating engineer Weston-super-Mare",
    "radiator installation Weston-super-Mare",
    "smart boiler controls",
    "boiler service near me",
    "gas boiler installation Weston-super-Mare",
    "local heating expert Weston-super-Mare",
  ],
  openGraph: {
    title: "Gas & Heating Services in Weston-super-Mare | Local Expert",
    description:
      "Professional gas and heating services in Weston-super-Mare. From boiler repairs and servicing to smart heating upgrades — reliable, local, and affordable.",
    // url: "https://www.yourdomain.co.uk/",
    siteName: "Gas & Heating Services Weston-super-Mare",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Gas & Heating Engineer in Weston-super-Mare",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/",
    languages: {
      // "en-GB": "https://www.yourdomain.co.uk/",
      // "pl-PL": "https://www.yourdomain.co.uk/pl",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas & Heating Services in Weston-super-Mare | Local Expert",
    description:
      "Reliable gas and heating engineer offering boiler repairs, servicing, and installations in Weston-super-Mare.",
    images: ["/images/poheating-metadata.jpg"],
  },
  category: "Heating and Plumbing Services",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="/images/poheating-hero.webp" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
