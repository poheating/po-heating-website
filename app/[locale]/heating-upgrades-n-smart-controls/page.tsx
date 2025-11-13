import { Metadata } from "next";
import HeatingUpgradesAbout from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesAbout/HeatingUpgradesAbout";
import HeatingUpgradesBenefits from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesBenefits/HeatingUpgradesBenefits";
import HeatingUpgradesPoints from "../../components/HeatingUpgradesSmartControls/HeatingUpgradesPoints/HeatingUpgradesPoints";
import HeatingUpgradesHero from "../../components/HeatingUpgradesSmartControls/Hero/page";

export const metadata: Metadata = {
  title: "Heating Upgrades & Smart Controls in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
  description:
    "Upgrade your home heating with smart boiler controls, magnetic filters, and designer radiators in Weston-super-Mare, Bristol, and Bridgwater. Professional installations by P O Heating.",
  keywords: [
    "heating upgrades Weston-super-Mare",
    "smart boiler controls Weston-super-Mare",
    "magnetic filter installation Weston-super-Mare",
    "designer radiators Weston-super-Mare",
    "heating upgrades Bristol",
    "smart controls Bristol",
    "heating upgrades Bridgwater",
    "magnetic filters Bridgwater",
    "home heating upgrades Somerset",
  ],
  openGraph: {
    title: "Heating Upgrades & Smart Controls in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
    description:
      "Professional installation of smart boiler controls, magnetic filters, and designer radiators across Weston-super-Mare, Bristol, Bridgwater, and North Somerset. Efficient, safe, and modern heating solutions.",
    siteName: "P O Heating",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Heating upgrades and smart controls Weston-super-Mare, Bristol, Bridgwater",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/heating-upgrades",
    // languages: {
    //   "en-GB": "https://www.yourdomain.co.uk/heating-upgrades",
    //   "pl-PL": "https://www.yourdomain.co.uk/pl/modernizacja-ogrzewania",
    // },
  },
};


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