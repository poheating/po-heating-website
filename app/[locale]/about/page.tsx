import styles from './styles.module.css'
import AboutPage from '../../components/AboutPage/AboutPage';
import { Metadata } from 'next';
import CallMeWidget from '../../components/CallMeWidget/callme-widget';

export const metadata: Metadata = {
  title: "About P O Heating | Local Gas & Heating Engineer in Weston-super-Mare, Bristol & Bridgwater",
  description:
    "Learn more about P O Heating, founded by Gas Safe engineer Paweł Olszewski. Providing trusted heating and gas services across Weston-super-Mare, Bristol, Bridgwater and North Somerset.",
  keywords: [
    "about P O Heating",
    "gas safe engineer Weston-super-Mare, Bristol and Bridgwater",
    "local heating expert",
    "Paweł Olszewski gas engineer",
    "boiler specialist Bristol",
    "heating company Weston-super-Mare",
  ],
  openGraph: {
    title: "About P O Heating | Reliable Gas Safe Engineer",
    description:
      "P O Heating offers professional heating and gas services with a personal touch. Learn about our story, values, and commitment to safe, efficient heating.",
    // url: "https://www.yourdomain.co.uk/about",
    siteName: "P O Heating",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "P O Heating - About Page",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/about",
    // languages: {
    //   "en-GB": "https://www.yourdomain.co.uk/about",
    //   "pl-PL": "https://www.yourdomain.co.uk/pl/o-nas",
    // },
  },
};


const About = () => {
    return (
        <div className={styles.page}>
            <AboutPage />
            <CallMeWidget />
        </div>
    );
}

export default About;