'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

const SmartBolierControls = () => {

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


    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; Smart Boiler Controls</h2>
                    <h3>Intelligent Heating, Greater Comfort</h3>
                </div>
                <p className={styles.sectionPar}>Upgrade your home’s efficiency with smart boiler controls that let you manage your hot water and heating with ease. Our team installs and configures modern thermostats and smart control systems compatible with most popular boiler brands.</p>

                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    {
                        points.map((point, i) => (
                            <div className={styles.point} key={i}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, type: 'spring', delay: 0.2 }}
                                    viewport={{ once: true }}
                                >{point.title}</motion.div>
                            </div>
                        ))
                    }
                </motion.div>

                <Link href={'/#contact'} className={styles.cta}>Get Smart Control Installed</Link>

            </div>
        </div>
    );
}

export default SmartBolierControls;

const points = [
    {
        title: <p><span>Adjust your boiler temperature</span> remotely via smartphone or tablet</p>
    },
    {
        title: <p><span>Reduce energy consumption</span> and lower your bills</p>
    },
    {
        title: <p><span>Keep consistent water temperature</span> and heating comfort all year round</p>
    },
    {
        title: <p><span>Integrate with</span> existing home automation systems</p>
    }
]