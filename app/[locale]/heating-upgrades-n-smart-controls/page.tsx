import { getTranslations } from 'next-intl/server';
import HeatingUpgradesAbout from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesAbout/HeatingUpgradesAbout";
import HeatingUpgradesBenefits from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesBenefits/HeatingUpgradesBenefits";
import HeatingUpgradesPoints from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesPoints/HeatingUpgradesPoints";
import HeatingUpgradesHero from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesHero/HeatingUpgradesHero";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HeatingUpgrades.metadata' });

  const baseUrl = "https://www.poheating.com";

  const currentUrl =
    locale === "pl"
      ? `${baseUrl}/pl/heating-upgrades-n-smart-controls`
      : `${baseUrl}/en/heating-upgrades-n-smart-controls`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.heatingUpgrades'),
      t('keywords.smartBoilerControls'),
      t('keywords.magneticFilterInstallation'),
      t('keywords.designerRadiators'),
      t('keywords.heatingUpgradesBristol'),
      t('keywords.smartControlsBristol'),
      t('keywords.heatingUpgradesBridgwater'),
      t('keywords.magneticFiltersBridgwater'),
      t('keywords.homeHeatingUpgrades'),
    ],
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: currentUrl,
      siteName: t('openGraph.siteName'),
      locale: locale === "pl" ? "pl_PL" : "en_GB",
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
        "en-GB": `${baseUrl}/en/heating-upgrades-n-smart-controls`,
        "pl-PL": `${baseUrl}/pl/heating-upgrades-n-smart-controls`,
      },
    },
  };
}


const HeatingUpgradesNSmartControls = () => {
    return ( 
        <div>
            <HeatingUpgradesHero />
            <HeatingUpgradesAbout />
            <HeatingUpgradesBenefits />
            <HeatingUpgradesPoints />
        </div>
     );
}
 
export default HeatingUpgradesNSmartControls;