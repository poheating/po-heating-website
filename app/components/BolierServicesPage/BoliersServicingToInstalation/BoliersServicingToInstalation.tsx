'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';
import { useTranslations } from 'next-intl';

const BoliersServicingToInstalation = () => {
    const t = useTranslations('BoilerServices.ServicingInstallation');

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

    const blocks = [
        {
            color1: '#d5e7ff',
            color2: '#3661d6',
            icon: <Wrench size={34} />,
            title: t('blocks.regularServicing.title'),
            points: [
                {
                    title: t('blocks.regularServicing.points.safety.title'),
                    desc: t('blocks.regularServicing.points.safety.desc')
                },
                {
                    title: t('blocks.regularServicing.points.insurance.title'),
                    desc: t('blocks.regularServicing.points.insurance.desc')
                },
                {
                    title: t('blocks.regularServicing.points.efficiency.title'),
                    desc: t('blocks.regularServicing.points.efficiency.desc')
                }
            ]
        },
        {
            color1: '#ffe6d5ff',
            color2: '#ff6600',
            icon: <ShieldCheck size={34} />,
            title: t('blocks.newInstallations.title'),
            points: [
                {
                    title: t('blocks.newInstallations.points.advice.title'),
                    desc: t('blocks.newInstallations.points.advice.desc')
                },
                {
                    title: t('blocks.newInstallations.points.installation.title'),
                    desc: t('blocks.newInstallations.points.installation.desc')
                },
                {
                    title: t('blocks.newInstallations.points.certified.title'),
                    desc: t('blocks.newInstallations.points.certified.desc')
                }
            ]
        },
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
                        blocks.map((block, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.pointsTop}>
                                    <div style={{ color: block.color2, backgroundColor: block.color1 }} className={styles.icon}>{block.icon}</div>
                                    <h4>{block.title}</h4>
                                </div>
                                <div className={styles.blockPoints}>
                                    {
                                        block.points.map((point, k) => (
                                            <div className={styles.blockPoint} key={k}>
                                                <span><CheckCircle /></span>
                                                <p><b>{point.title}: </b>{point.desc}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <div className={styles.bottomCertificate}>
                    <span><Award /></span>
                    <p>{t('certificate')}</p>
                </div>
            </div>
        </div>
    );
}

export default BoliersServicingToInstalation;