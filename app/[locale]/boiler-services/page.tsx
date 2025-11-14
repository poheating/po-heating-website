import { getTranslations } from 'next-intl/server';
import BolierProblems from '../../components/BolierServicesPage/BolierProblems/BolierProblems';
import BoliersServicingToInstalation from '../../components/BolierServicesPage/BoliersServicingToInstalation/BoliersServicingToInstalation';
import BolierServicesHero from '../../components/BolierServicesPage/Hero/page';
import SmartBolierControls from '../../components/BolierServicesPage/SmartBolierControls/SmartBolierControls';
import styles from './styles.module.css'
import CallMeWidget from '../../components/CallMeWidget/callme-widget';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BoilerServices.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.boilerService'),
      t('keywords.boilerRepair'),
      t('keywords.newBoilerInstallation'),
      t('keywords.gasBoilerMaintenance'),
      t('keywords.boilerEngineer'),
      t('keywords.emergencyBoilerRepair'),
    ],
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      // url: "https://www.yourdomain.co.uk/boiler-services",
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
      // canonical: "https://www.yourdomain.co.uk/boiler-services",
      // languages: {
      //   "en-GB": "https://www.yourdomain.co.uk/boiler-services",
      //   "pl-PL": "https://www.yourdomain.co.uk/pl/serwis-boilerow",
      // },
    },
  };
}

const BolierServices = () => {
    return ( 
        <div className={styles.page}>
            <BolierServicesHero />
            <BolierProblems />
            <BoliersServicingToInstalation />
            <SmartBolierControls />
            <CallMeWidget />
        </div>
     );
}
 
export default BolierServices;