import { Metadata } from 'next';
import CallMeWidget from '../../components/CallMeWidget/callme-widget';
import GasAppliancesAbout from '../../components/GasAppliancesPage/GasAppliancesAbout/GasAppliancesAbout';
import GasAppliancesBoliers from '../../components/GasAppliancesPage/GasAppliancesBoliers/GasAppliancesBoliers';
import GasAppliancesSafety from '../../components/GasAppliancesPage/GasAppliancesSafety/GasAppliancesSafety';
import GasAppliancesSteps from '../../components/GasAppliancesPage/GasAppliancesSteps/GasAppliancesSteps';
import GasAppliancesHero from '../../components/GasAppliancesPage/Hero/page';
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: "Gas Appliances Installations in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
  description:
    "Professional gas cooker, hob and boiler installations in Weston-super-Mare, Bristol, and Bridgwater. Safe, compliant, and efficient gas fitting by P O Heating experts.",
  keywords: [
    "gas appliances installations Weston-super-Mare",
    "gas boiler installation Weston-super-Mare",
    "gas hob installation Weston-super-Mare",
    "gas cooker installation Bristol",
    "gas boiler installation Bristol",
    "gas cooker installation Bridgwater",
    "gas hob installation Bridgwater",
    "Gas Safe engineer Weston-super-Mare",
    "gas appliance fitting Somerset",
  ],
  openGraph: {
    title: "Gas Appliances Installations in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
    description:
      "Certified gas cooker, hob and boiler installations across Weston-super-Mare, Bristol, Bridgwater, and North Somerset. Trusted local heating engineers ensuring safety and efficiency.",
    siteName: "P O Heating",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Gas appliances installations Weston-super-Mare, Bristol and Bridgwater",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/gas-appliance-installations",
    // languages: {
    //   "en-GB": "https://www.yourdomain.co.uk/gas-appliance-installations",
    //   "pl-PL": "https://www.yourdomain.co.uk/pl/instalacje-gazowe",
    // },
  },
};


const GasAppliancesInstallations = () => {
    return ( 
        <div className={styles.page}>
            <GasAppliancesHero />
            <GasAppliancesAbout />
            <GasAppliancesBoliers />
            <GasAppliancesSafety />
            <GasAppliancesSteps />
            <CallMeWidget />
        </div>
     );
}
 
export default GasAppliancesInstallations;