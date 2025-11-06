'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

const BoliersServicingToInstalation = () => {

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


    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; Servicing & Installation</h2>
                    <h3>From Annual Servicing to Full Installations — We Handle It All</h3>
                </div>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}>
                    {
                        blocks.map((block, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.pointsTop}>
                                    <div style={{color: block.color2, backgroundColor: block.color1}} className={styles.icon}>{block.icon}</div>
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
                    <p>Gas Safe Registered Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default BoliersServicingToInstalation;

const blocks = [
    {
        color1: '#d5e7ff',
        color2: '#3661d6',
        icon: <Wrench size={34} />,
        title: 'Regular Boiler Servicing',
        points: [
            {
                title: 'Safety First',
                desc: 'Comprehensive checks to prevent carbon monoxide leaks and ensure safe operation'
            },
            {
                title: 'Efficiency Boost',
                desc: 'Annual servicing keeps your boiler running efficiently, reducing energy bills'
            },
            {
                title: 'Warranty Protection',
                desc: 'Many manufacturers require annual servicing to maintain warranty coverage'
            }
        ]
    },
    {
        color1: '#ffe6d5ff',
        color2: '#ff6600',
        icon: <ShieldCheck size={34} />,
        title: 'New Boiler Installations',
        points: [
            {
                title: 'Expert Advice',
                desc: 'Free consultation to help you choose the right boiler for your home and budget'
            },
            {
                title: 'Professional Installation',
                desc: 'Full installation service including removal of old boiler and system upgrades'
            },
            {
                title: 'Gas Safe Certified',
                desc: 'All work completed to the highest safety standards with certification included'
            }
        ]
    },
];