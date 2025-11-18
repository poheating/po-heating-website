'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const GasAppliancesAbout = () => {
    const t = useTranslations('GasAppliances.About');

    const points = [
        {
            title: t('points.safeConnection')
        },
        {
            title: t('points.removal')
        },
        {
            title: t('points.testing')
        },
        {
            title: t('points.neatFinish')
        }
    ]

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/gas-appliances-about-img.webp'} width={800} height={800} alt={t('imageAlt')} />
                    <div>
                        <p className={styles.sectionPar}>
                            {t('paragraph.part1')} <span>{t('paragraph.span1')}</span> {t('paragraph.part2')} <span>{t('paragraph.span2')}</span>{t('paragraph.part3')}
                        </p>
                        <div className={styles.points}>
                            {
                                points.map((point, i) => (
                                    <motion.h4
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.85, type: 'spring', delay: 0.1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        key={i}
                                        ><span><CheckCircle /></span>{point.title}</motion.h4>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GasAppliancesAbout;