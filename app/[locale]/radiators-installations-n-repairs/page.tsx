import { Metadata } from 'next';
import RadiatorsHero from '../../components/RadiatorsPage/Hero/page';
import RadiatorsAbout from '../../components/RadiatorsPage/RadiatorsAbout/RadiatorsAbout';
import RadiatorsOurProcess from '../../components/RadiatorsPage/RadiatorsOurProcess/RadiatorsOurProcess';
import RadiatorsProblems from '../../components/RadiatorsPage/RadiatorsProblems/RadiatorsProblems';
import styles from './styles.module.css'
import CallMeWidget from '../../components/CallMeWidget/callme-widget';

export const metadata: Metadata = {
  title: "Gas Appliances Installations in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
  description:
    "Professional gas cooker and hob installations in Weston-super-Mare, Bristol, and Bridgwater. Safe, compliant, and efficient gas fitting by P O Heating experts.",
  keywords: [
    "gas appliances installations Weston-super-Mare",
    "gas cooker installation Weston-super-Mare",
    "gas hob installation Weston-super-Mare",
    "gas cooker installation Bristol",
    "gas hob installation Bristol",
    "gas cooker installation Bridgwater",
    "gas hob installation Bridgwater",
    "Gas Safe engineer Weston-super-Mare",
    "gas appliance fitting Somerset",
  ],
  openGraph: {
    title: "Gas Appliances Installations in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
    description:
      "Certified gas cooker and hob installations across Weston-super-Mare, Bristol, Bridgwater, and North Somerset. Trusted local heating engineers ensuring safety and efficiency.",
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