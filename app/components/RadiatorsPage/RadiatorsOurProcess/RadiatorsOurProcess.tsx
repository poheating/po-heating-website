'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const RadiatorsOurProcess = () => {
    const t = useTranslations('Radiators.OurProcess');

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.92, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
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
            title: t('points.assessment.title'),
            desc: t('points.assessment.desc')
        },
        {
            title: t('points.repair.title'),
            desc: t('points.repair.desc')
        },
        {
            title: t('points.installation.title'),
            desc: t('points.installation.desc')
        },
        {
            title: t('points.testing.title'),
            desc: t('points.testing.desc')
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <p className={styles.sectionPar}>
                    {t('sectionPar')}
                </p>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}>
                    {
                        points.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{i + 1}</div>
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

export default RadiatorsOurProcess;