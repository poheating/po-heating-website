'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const cardVariants = {
    hidden: {
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0)',
        boxShadow: '0px',
        y: 10
    },
    visible: (custom: any) => ({
        backgroundColor: custom,
        border: '1px solid rgb(218, 218, 218)',
        boxShadow: '0px 8px 16px rgba(0,0,0,0.06)',
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeInOut" as "easeInOut",
        }
    }),
};

const Services = () => {
    const t = useTranslations('Services');

    const services = [
        {
            key: 'boiler',
            headerColor: '#6e6e6e',
            backgroundColor: '#dfdfdfff',
            img: '/images/services/bolier.webp',
            link: '/boiler-services',
        },
        {
            key: 'radiators',
            headerColor: '#a5755cff',
            backgroundColor: '#ffc793ff',
            img: '/images/services/radiator.webp',
            link: '/radiators-installations-n-repairs',
        },
        {
            key: 'gas-appliance',
            headerColor: '#41434dff',
            backgroundColor: '#a6adc2ff',
            img: '/images/services/cooker.webp',
            link: '/gas-appliances-installations',
        },
        {
            key: 'smart-controls',
            headerColor: '#6e8299ff',
            backgroundColor: '#c2dcfaff',
            img: '/images/services/smart-controls.webp',
            link: '/heating-upgrades-n-smart-controls',
        },
    ];

    return (
        <div className={styles.page} id='services'>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; {t('sectionHeading.services')}</h2>
                    <h3>{t('sectionHeading.title')}</h3>
                </div>
                <div className={styles.services}>
                    {
                        services.map((service, i) => (
                            <motion.div
                                className={styles.service}
                                key={i}
                                custom={service.backgroundColor}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image src={service.img} width={450} height={450} alt={t(`services.${service.key}.alt`)} />
                                <div className={styles.right}>
                                    <h4 style={{ color: service.headerColor }}>{t(`services.${service.key}.topic`)}</h4>
                                    <Link className={styles.title} href={service.link}><p>{t(`services.${service.key}.name`)}</p></Link>
                                    <h5 className={styles.subheading}>{t(`services.${service.key}.subheading`)}</h5>
                                    <p className={styles.par}>{t(`services.${service.key}.par`)}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;