import { Metadata } from 'next';
import BolierProblems from '../components/BolierServicesPage/BolierProblems/BolierProblems';
import BoliersServicingToInstalation from '../components/BolierServicesPage/BoliersServicingToInstalation/BoliersServicingToInstalation';
import BolierServicesHero from '../components/BolierServicesPage/Hero/page';
import SmartBolierControls from '../components/BolierServicesPage/SmartBolierControls/SmartBolierControls';
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: "Boiler Service & Repair in Weston-super-Mare | P O Heating",
  description:
    "Expert boiler servicing, repairs, and installations in Weston-super-Mare. Keep your home warm and efficient with certified Gas Safe engineer Paweł Olszewski.",
  keywords: [
    "boiler service Weston-super-Mare",
    "boiler repair Weston-super-Mare",
    "new boiler installation",
    "gas boiler maintenance",
    "boiler engineer Weston-super-Mare",
    "emergency boiler repair",
  ],
  openGraph: {
    title: "Boiler Services in Weston-super-Mare | P O Heating",
    description:
      "Certified boiler repairs, installations, and maintenance across Weston-super-Mare and North Somerset. Call now for fast, reliable service.",
    // url: "https://www.yourdomain.co.uk/boiler-services",
    siteName: "P O Heating",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Boiler Repair Weston-super-Mare",
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


const BolierServices = () => {
    return ( 
        <div className={styles.page}>
            <BolierServicesHero />
            <BolierProblems />
            <BoliersServicingToInstalation />
            <SmartBolierControls />
        </div>
     );
}
 
export default BolierServices;