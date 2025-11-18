import { getTranslations } from 'next-intl/server';
import RadiatorsHero from '../../components/RadiatorsPage/RadiatorsHero/RadiatorsHero';
import RadiatorsAbout from '../../components/RadiatorsPage/RadiatorsAbout/RadiatorsAbout';
import RadiatorsOurProcess from '../../components/RadiatorsPage/RadiatorsOurProcess/RadiatorsOurProcess';
import RadiatorsProblems from '../../components/RadiatorsPage/RadiatorsProblems/RadiatorsProblems';
import styles from './styles.module.css'
import CallMeWidget from '../../components/CallMeWidget/callme-widget';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Radiators.metadata' });

  const baseUrl = "https://www.poheating.com";

  const currentUrl =
    locale === "pl"
      ? `${baseUrl}/pl/radiators-installations-n-repairs`
      : `${baseUrl}/en/radiators-installations-n-repairs`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.radiatorInstallation'),
      t('keywords.radiatorRepair'),
      t('keywords.radiatorInstallationBristol'),
      t('keywords.radiatorRepairBristol'),
      t('keywords.radiatorInstallationBridgwater'),
      t('keywords.radiatorRepairBridgwater'),
      t('keywords.leakingRadiator'),
      t('keywords.coldSpots'),
      t('keywords.noisyRadiators'),
      t('keywords.heatingEngineer'),
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
        "en-GB": `${baseUrl}/en/radiators-installations-n-repairs`,
        "pl-PL": `${baseUrl}/pl/radiators-installations-n-repairs`,
      },
    },
  };
}

const radiatorNHeatingUpgrades = () => {
    return ( 
        <div className={styles.page}>
            <RadiatorsHero />
            <RadiatorsAbout />
            <RadiatorsProblems />
            <RadiatorsOurProcess />
            <CallMeWidget />
        </div>
     );
}
 
export default radiatorNHeatingUpgrades;