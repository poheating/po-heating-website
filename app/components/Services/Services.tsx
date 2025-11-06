'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: {
        backgroundColor: '#ffffff',
        y: 10
    },
    visible: (custom: any) => ({
        backgroundColor: custom,
        y: 0,
        transition: {
            // Czas trwania animacji koloru i wejścia
            duration: 0.4,
            ease: "easeInOut" as "easeInOut",
        }
    }),
};

const Services = () => {
    return (
        <div className={styles.page} id='services'>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; services</h2>
                    <h3>Professional Heating Services for Every Home</h3>
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
                                <Image src={service.img} width={450} height={450} alt={`P O heating - ${service.topic}`} />
                                <div className={styles.right}>
                                    <h4 style={{ color: service.headerColor }}>{service.topic}</h4>
                                    <Link className={styles.title} href={service.link}><p>{service.name}</p></Link>
                                    <h5 className={styles.subheading}>{service.subheading}</h5>
                                    <p className={styles.par}>{service.par}</p>
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

const services = [
    {
        headerColor: '#6e6e6e',
        backgroundColor: '#dfdfdfff',
        img: '/images/services/bolier.png',
        link: '/boiler-services',
        topic: 'Boiler Service & Repairs',
        name: 'Keep Your Home Warm and Safe',
        subheading: 'Annual maintenance and fast repairs that keep your boiler efficient, safe, and ready for the cold season.',
        par: `A well-maintained boiler means peace of mind.
        We provide certified servicing and expert repairs to keep your heating system running smoothly all year.
        Whether it’s a leak, a pressure issue, or strange noises — we diagnose, repair, and restore your boiler to full working order.
        Regular servicing prevents costly breakdowns and ensures consistent heat throughout your home.`
    },
    {
        headerColor: '#6e8299ff',
        backgroundColor: '#c2dcfaff',
        img: '/images/services/smart-controls.png',
        link: '/smart-controls',
        topic: 'Heating upgrades & smart controls',
        name: 'Upgrade Your Heating System',
        subheading: 'Enhance comfort and energy efficiency with modern thermostats, filters, and stylish radiators.',
        par: `
        Upgrade your heating system with modern, efficient solutions.
        We fit smart thermostats, magnetic filters, and designer radiators that make your home easier to manage and more sustainable.
        Control your heating from your smartphone, cut energy costs, and enjoy quieter, cleaner performance every day.
        `
    },
    {
        headerColor: '#a5755cff',
        backgroundColor: '#ffc793ff',
        img: '/images/services/radiator.png',
        link: '/radiators',
        topic: 'Radiators — installation & repair',
        name: 'Warmth Where You Need It',
        subheading: 'From leaks to stylish upgrades — we make every radiator perform perfectly.',
        par: `
        Cold spots or leaking pipes? We’ll fix it fast.
        We balance your heating system for even warmth in every room, repair leaks, and replace old radiators with modern, designer options that combine efficiency with style.
        `
    },
    {
        headerColor: '#41434dff',
        backgroundColor: '#a6adc2ff',
        img: '/images/services/cooker.png',
        link: '/gas-appliance-installation',
        topic: 'Gas appliance installation',
        name: 'Safe Gas Cooker Installation',
        subheading: 'Certified Gas Safe installation for cookers and hobs.',
        par: `
        When installing a new gas cooker or hob, safety is everything.
        We provide certified gas-safe installation, ensuring your appliance is connected, tested, and compliant with all safety standards.
        Enjoy peace of mind knowing your kitchen is safe and ready to use.
        `
    }
]