import { Mail, PhoneCall } from 'lucide-react';
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('Contact');

    return (
        <div className={styles.page} id='contact'>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('sectionHeading.title')}</h2>
                    <h3>{t('sectionHeading.subtitle')}</h3>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.par}>{t('description')}</p>
                    <div className={styles.right}>
                        <h4>{t('contactInfo.title')}</h4>
                        <p><span>{t('contactInfo.name')}</span></p>
                        <div className={styles.contactWays}>
                            <p><PhoneCall size={22}/><a href="tel:+447764380450">{t('contactInfo.phone')}</a></p>
                            <p><Mail size={22}/><a href="mailto:poheating@outlook.com">{t('contactInfo.email')}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;