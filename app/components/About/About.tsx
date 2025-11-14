'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('About');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h2>&mdash; &nbsp; {t('aboutTitle')}</h2>
                <h3>{t('heading')}</h3>

                <div className={styles.bottom}>
                    <Image src={'/images/main-about.webp'} width={600} height={600} alt={t('imageAlt')} />
                    <div className={styles.par}>
                        <p>{t('paragraph1.part1')}<span>{t('paragraph1.span')}</span>{t('paragraph1.part2')}</p>

                        <p>{t('paragraph2.part1')}<span>{t('paragraph2.span')}</span>{t('paragraph2.part2')}</p>

                        <p>{t('paragraph3')}</p>
                        <ul className={styles.points}>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>{t('listItem1')}
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>{t('listItem2')}
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>{t('listItem3')}
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;