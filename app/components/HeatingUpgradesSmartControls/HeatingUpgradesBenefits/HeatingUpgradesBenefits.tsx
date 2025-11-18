'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const HeatingUpgradesBenefits = () => {
    const t = useTranslations('HeatingUpgrades.Benefits');

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

    const points = [
        {
            icon: '📱',
            title: t('points.smartControls.title'),
            desc: t('points.smartControls.desc')
        },
        {
            icon: '🧲',
            title: t('points.magneticFilters.title'),
            desc: t('points.magneticFilters.desc')
        },
        {
            icon: '✨',
            title: t('points.designerRadiators.title'),
            desc: t('points.designerRadiators.desc')
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}>
                    {
                        points.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{point.icon}</div>
                                <h4>{point.title}</h4>
                                <p>{point.desc}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <Link className={styles.cta} href={'/#contact'}>{t('cta')}</Link>
            </div>
        </div>
    );
}

export default HeatingUpgradesBenefits;