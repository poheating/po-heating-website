import { getTranslations } from 'next-intl/server';
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const m = await getTranslations({ locale, namespace: 'Privacy-Metadata' });

  const baseUrl = "https://www.poheating.com";

  const currentUrl =
    locale === "pl"
      ? `${baseUrl}/pl/privacy-policy`
      : `${baseUrl}/en/privacy-policy`;

  return {
    title: m('title'),
    description: m('description'),
    keywords: [
      m('keywords.privacyPolicy'),
      m('keywords.personalData'),
      m('keywords.gdpr'),
    ],
    openGraph: {
      title: m('openGraph.title'),
      description: m('openGraph.description'),
      url: currentUrl,
      siteName: m('openGraph.siteName'),
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      type: "article",
      images: [
        {
          url: "/images/poheating-metadata.jpg",
          width: 1200,
          height: 630,
          alt: m('openGraph.imageAlt'),
        },
      ],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        "en-GB": `${baseUrl}/en/privacy-policy`,
        "pl-PL": `${baseUrl}/pl/privacy-policy`,
      },
    },
  };
}

const PrivacyPolicy = () => {
    const t = useTranslations('PrivacyPolicy');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1>{t('title')}</h1>

                <div className={styles.block}>
                    <p>
                        {t('block1')}
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>{t('block2.title')}</h2>
                    <p>
                        {t('block2.description')}
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>{t('block3.title')}</h2>
                    <p>
                        {t('block3.description')}
                    </p>
                    <ul>
                        <li>{t('block3.list.name')}</li>
                        <li>{t('block3.list.contact')}</li>
                        <li>{t('block3.list.enquiry')}</li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <h2>{t('block4.title')}</h2>
                    <p>{t('block4.description1')}</p>
                    <ul>
                        <li>{t('block4.list.response')}</li>
                        <li>{t('block4.list.quotes')}</li>
                        <li>{t('block4.list.appointments')}</li>
                    </ul>
                    <p>
                        {t('block4.description2')}
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>{t('block5.title')}</h2>
                    <p>
                        {t('block5.description')}
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>{t('block6.title')}</h2>
                    <p>
                        {t('block6.description')}
                    </p>
                    <ul>
                        <li>{t('block6.list.access')}</li>
                        <li>{t('block6.list.correction')}</li>
                        <li>{t('block6.list.deletion')}</li>
                        <li>{t('block6.list.withdraw')}</li>
                        <li>{t('block6.list.complaint')}</li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <h2>{t('block7.title')}</h2>
                    <p>
                        {t('block7.description')}
                    </p>
                    <p>{t('block7.company')}</p>
                    <p>{t('block7.email')}</p>
                    <p>{t('block7.phone')}</p>
                </div>

            </div>
        </div>
    );
}

export default PrivacyPolicy;