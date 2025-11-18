'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardCheck, PlugZap, Wrench } from 'lucide-react';
import { useTranslations } from 'next-intl';

const GasAppliancesSteps = () => {
    const t = useTranslations('GasAppliances.Steps');

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
            icon: <ClipboardCheck size={28}/>,
            title: t('points.initialCheck.title'),
            desc: t('points.initialCheck.desc')
        },
        {
            icon: <PlugZap size={28}/>,
            title: t('points.safeDisconnection.title'),
            desc: t('points.safeDisconnection.desc')
        },
        {
            icon: <Wrench size={28}/>,
            title: t('points.preciseInstallation.title'),
            desc: t('points.preciseInstallation.desc')
        },
        {
            icon: <CheckCircle size={28}/>,
            title: t('points.finalTesting.title'),
            desc: t('points.finalTesting.desc')
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <div className={styles.sectionPar}>
                    {t('sectionPar')}
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
            </div>
        </div>
    );
}

export default GasAppliancesSteps;