'use client'
import { Award, ClipboardCheck, MessageSquare, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
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


const WhyUs = () => {
    const t = useTranslations('WhyUs');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('sectionHeading.title')}</h2>
                    <h3>{t('sectionHeading.subtitle')}</h3>
                </div>

                <motion.div
                    className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.23 }}
                >

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <Shield size={54} />
                        </motion.div>
                        <h4>{t('points.premiumComponents.title')}</h4>
                        <p>{t('points.premiumComponents.description')}</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <ClipboardCheck size={54} />
                        </motion.div>
                        <h4>{t('points.safetyChecks.title')}</h4>
                        <p>{t('points.safetyChecks.description')}</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <Award size={54} />
                        </motion.div>
                        <h4>{t('points.guarantee.title')}</h4>
                        <p>{t('points.guarantee.description')}</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <MessageSquare size={54} />
                        </motion.div>
                        <h4>{t('points.transparentService.title')}</h4>
                        <p>{t('points.transparentService.description')}</p>
                    </div>

                </motion.div>

                <div className={styles.cta}>
                    <Link href={'/#contact'}>
                        {t('cta')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;