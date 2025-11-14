'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const SmartBolierControls = () => {
    const t = useTranslations('BoilerServices.SmartControls');

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
                delayChildren: 0.02,
                staggerChildren: 0.2,
            },
        },
    };

    const points = [
        {
            title: <p><span>{t('points.remote.title')}</span> {t('points.remote.desc')}</p>
        },
        {
            title: <p><span>{t('points.energy.title')}</span> {t('points.energy.desc')}</p>
        },
        {
            title: <p><span>{t('points.consistency.title')}</span> {t('points.consistency.desc')}</p>
        },
        {
            title: <p><span>{t('points.integration.title')}</span> {t('points.integration.desc')}</p>
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <p className={styles.sectionPar}>{t('sectionPar')}</p>

                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}>
                    {
                        points.map((point, i) => (
                            <div className={styles.point} key={i}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, type: 'spring', delay: 0.12 }}
                                    viewport={{ once: true }}
                                >{point.title}</motion.div>
                            </div>
                        ))
                    }
                </motion.div>

                <Link href={'/#contact'} className={styles.cta}>{t('cta')}</Link>

            </div>
        </div>
    );
}

export default SmartBolierControls;