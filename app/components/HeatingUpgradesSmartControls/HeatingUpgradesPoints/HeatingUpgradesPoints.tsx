'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { DropletIcon, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HeatingUpgradesPoints = () => {
    const t = useTranslations('HeatingUpgrades.Points');

    const itemVariants = {
        hidden: { opacity: 0, scale: 1, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
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
            icon: <Smartphone size={31}/>,
            title: t('points.control.title'),
            desc: t('points.control.desc')
        },
        {
            icon: <DropletIcon size={31}/>,
            title: t('points.heatDistribution.title'),
            desc: t('points.heatDistribution.desc')
        },
        {
            icon: <TrendingUp size={31}/>,
            title: t('points.energySave.title'),
            desc: t('points.energySave.desc')
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; {t('heading')}</h2>
                    <h3>{t('subheading')}</h3>
                </div>
                <div className={styles.bottomContent}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/heating-upgrades-points.webp'} width={800} height={800} alt={t('imageAlt')} />
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
                {/* <Link className={styles.cta} href={'/#contact'}>Upgrade Your heating sytem</Link> */}
            </div>
        </div>
    );
}

export default HeatingUpgradesPoints;