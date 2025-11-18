'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

const HeatingUpgradesAbout = () => {
    const t = useTranslations('HeatingUpgrades.About');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/heating-upgrades-about.webp'} width={800} height={800} alt={t('imageAlt')} />
                    <div>
                        <p className={styles.sectionPar}>
                            {t('paragraph1.part1')} <span>{t('paragraph1.span')}</span>{t('paragraph1.part2')}
                        </p>
                        <p className={styles.sectionPar}>
                            {t('paragraph2.part1')} <span>{t('paragraph2.span')}</span> {t('paragraph2.part2')}
                        </p>
                        <p className={styles.sectionPar}>
                            {t('paragraph3')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeatingUpgradesAbout;