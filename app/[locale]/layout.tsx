import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "@/components/footer-one";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LOCALES } from "@/i18n";
import { getMessages, getTranslations } from "next-intl/server";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

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


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Layout-metadata' });

  const baseUrl = "https://www.poheating.com";

  const currentUrl = locale === "pl"
    ? `${baseUrl}/pl`
    : `${baseUrl}/en`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.gasEngineer'),
      t('keywords.boilerRepair'),
      t('keywords.heatingEngineer'),
      t('keywords.radiatorInstallation'),
      t('keywords.smartBoilerControls'),
      t('keywords.boilerService'),
      t('keywords.gasBoilerInstallation'),
      t('keywords.localHeatingExpert'),
    ],
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: currentUrl,
      siteName: t('openGraph.siteName'),
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      type: "website",
      images: [
        {
          url: "/images/poheating-metadata.jpg",
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        },
      ],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        "en-GB": `${baseUrl}/en`,
        "pl-PL": `${baseUrl}/pl`,
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
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ["/images/poheating-metadata.jpg"],
    },
    category: t('category'),
  };
}
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate the locale
  if (!LOCALES.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    // Load messages for the specific locale
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    console.error('Failed to load messages:', error);
    // Fallback to empty messages
    messages = {};
  }

  return (
    <html lang={locale}>
      <Head>
        <link rel="preload" as="image" href="/images/poheating-hero.webp" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}