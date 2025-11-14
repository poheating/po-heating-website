'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

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

const AboutPage = () => {
    const t = useTranslations('About-Page.AboutPage');

    const heroPoints = [
        {
            icon: '🔧',
            title: t('section1.heroPoints.safety.title'),
            desc: t('section1.heroPoints.safety.desc')
        },
        {
            icon: '🌡️',
            title: t('section1.heroPoints.efficiency.title'),
            desc: t('section1.heroPoints.efficiency.desc')
        },
        {
            icon: '💬',
            title: t('section1.heroPoints.honesty.title'),
            desc: t('section1.heroPoints.honesty.desc')
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                {/* section 1 */}
                <div className={styles.section1Content}>
                    <div className={styles.pageHeading}>
                        <h1>&mdash; &nbsp; {t('section1.heading')}</h1>
                        <h2>{t('section1.title.part1')} <motion.span
                            initial={{ color: '#303030' }}
                            whileInView={{ color: '#ff6600' }}
                            transition={{ duration: 0.6, type: 'spring', delay: 0.4 }}
                            viewport={{ once: true }}>{t('section1.title.span')}</motion.span> {t('section1.title.part2')}</h2>
                    </div>
                    <Image priority src={'/images/about-hero.webp'} width={1300} height={1300} alt={t('section1.imageAlt')} />
                    <motion.div className={styles.heroPoints}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}>
                        {
                            heroPoints.map((point, i) => (
                                <motion.div className={styles.point} key={i} variants={itemVariants}>
                                    <div className={styles.icon}>{point.icon}</div>
                                    <h3>{point.title}</h3>
                                    <p>{point.desc}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>


                {/* section 2 */}
                <div className={styles.section2}>
                    <div className={styles.sectionHeading}>
                        <h2>&mdash; &nbsp; {t('section2.heading')}</h2>
                        <h3>{t('section2.subheading')}</h3>
                    </div>
                    <div className={styles.section2Content}>
                        <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/about-section2.webp'} width={800} height={800} alt={t('section2.imageAlt')} />
                        <div>
                            <p className={styles.sectionPar}>
                                {t('section2.paragraph1.part1')} <span>{t('section2.paragraph1.span')}</span>{t('section2.paragraph1.part2')}
                            </p>
                            <p className={styles.sectionPar}>
                                {t('section2.paragraph2.part1')} <span>{t('section2.paragraph2.span')}</span>{t('section2.paragraph2.part2')}
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, type: 'spring' }}
                        viewport={{ once: true, amount: 0.12 }}
                    >
                        <h2>{t('section2.cta.title')}</h2>
                        <p>{t('section2.cta.description')}</p>
                        <Link href={'/#contact'}>
                            {t('section2.cta.button')}
                        </Link>
                    </motion.div>
                </div>

                {/* section 3 */}
                <div className={styles.section3}>
                    <div className={styles.sectionHeading}>
                        <h2>&mdash; &nbsp; {t('section3.heading')}</h2>
                        <h3>{t('section3.subheading')}</h3>
                    </div>
                    <div className={styles.section3Content}>
                        <div>
                            <p className={styles.sectionPar}>
                                {t('section3.paragraph')}
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className={styles.donePoints}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}>
                        <motion.p variants={itemVariants}><span><Check /></span> {t('section3.points.friendlyService')}</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> {t('section3.points.transparentPricing')}</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> {t('section3.points.fastResponse')}</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> {t('section3.points.guaranteedWorkmanship')}</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;