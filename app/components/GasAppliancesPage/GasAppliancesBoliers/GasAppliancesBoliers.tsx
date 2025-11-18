'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const GasAppliancesBoliers = () => {
    const t = useTranslations('GasAppliances.Boliers');

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring' as 'spring',
                stiffness: 260,
                damping: 20,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/gas-appliances-boilers.webp'} width={800} height={800} alt={t('imageAlt')} />
                    <div>
                        <h4>{t('comprehensiveTitle')}</h4>
                        <p className={styles.sectionPar}>
                            {t('comprehensiveDescription')}
                        </p>
                        <h4>{t('safeTitle')}</h4>
                        <div className={styles.sectionPar}>
                            {t('safeDescription')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GasAppliancesBoliers;