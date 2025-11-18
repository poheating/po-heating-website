'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const HeatingUpgradesHero = () => {
    const t = useTranslations('HeatingUpgrades.Hero');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h1>&mdash; &nbsp; {t('heading')}</h1>
                    <h2><motion.span
                        initial={{ color: '#303030' }}
                        whileInView={{ color: '#ff6600' }}
                        transition={{ duration: 0.6, type: 'spring', delay: 0.4 }}
                        viewport={{ once: true }}>{t('title.span')}</motion.span> {t('title.part2')}</h2>
                </div>
                <Image priority sizes="(max-width: 768px) 100vw, 1920px" src={'/images/heating-upgrades-hero.webp'} width={1300} height={1300} alt={t('imageAlt')} />
            </div>
        </div>
    );
}

export default HeatingUpgradesHero;