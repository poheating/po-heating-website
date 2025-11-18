import Link from 'next/link';
import styles from './styles.module.css'
import { PhoneCallIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.headers}>
                    <h1>{t('title')}</h1>
                    <p>{t('description')}</p>
                </div>
                <div className={styles.cta}>
                    <Link href={'/#contact'} className={styles.cta1}>
                        <div className={styles.btnTop}>
                            {t('callNow')} <span><PhoneCallIcon /></span>
                        </div>
                    </Link>
                    <Link href={'/#services'} className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/20 transition">{t('services')}</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;