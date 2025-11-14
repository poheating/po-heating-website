'use'
import FAQs from '@/components/faqs-section-two';
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

const Faq = () => {
    const t = useTranslations('Faq');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('sectionHeading.title')}</h2>
                    <h3>{t('sectionHeading.subtitle')}</h3>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.par}>
                        {t('description')}
                    </p>
                    <FAQs />
                </div>
            </div>
        </div>
    );
}

export default Faq;