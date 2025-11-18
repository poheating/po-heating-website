import styles from './styles.module.css'
import AboutPage from '../../components/AboutPage/AboutPage';
import { getTranslations } from 'next-intl/server';
import CallMeWidget from '../../components/CallMeWidget/callme-widget';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About-Page.metadata' });

  const baseUrl = "https://www.poheating.com";

  const currentUrl =
    locale === "pl"
      ? `${baseUrl}/pl/about`
      : `${baseUrl}/en/about`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.about'),
      t('keywords.gasSafeEngineer'),
      t('keywords.localHeatingExpert'),
      t('keywords.pawelOlszewski'),
      t('keywords.boilerSpecialist'),
      t('keywords.heatingCompany'),
    ],
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: currentUrl,
      siteName: t('openGraph.siteName'),
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      type: "article",
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
        "en-GB": `${baseUrl}/en/about`,
        "pl-PL": `${baseUrl}/pl/about`,
      },
    },
  };
}

const About = () => {
    return (
        <div className={styles.page}>
            <AboutPage />
            <CallMeWidget />
        </div>
    );
}

export default About;