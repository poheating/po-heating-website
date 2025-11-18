'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const RadiatorsHero = () => {
    const t = useTranslations('Radiators.Hero');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h1>&mdash; &nbsp; {t('heading')}</h1>
                    <h2><motion.span
                        initial={{ color: '#303030' }}
                        whileInView={{ color: '#ff6600' }}
                        transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
                        viewport={{ once: true }}>{t('title.span')}</motion.span> {t('title.part2')}</h2>
                </div>
                <Image priority src={'/images/radiators-hero.jpg'} width={1300} height={1300} alt={t('imageAlt')} />
                {/* <motion.div className={styles.heroPoints}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    {
                        heroPoints.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{point.icon}</div>
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                            </motion.div>
                        ))
                    }
                </motion.div> */}
            </div>
        </div>
    );
}

export default RadiatorsHero;