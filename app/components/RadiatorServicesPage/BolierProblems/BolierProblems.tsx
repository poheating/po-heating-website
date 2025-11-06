'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';

const BolierProblems = () => {

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
                    <h1>&mdash; &nbsp; Fixed Fast</h1>
                    <h2>Common Boiler Problems</h2>
                </div>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    {
                        points.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{point.icon}</div>
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <p className={styles.sectionPar}>We diagnose and repair all boiler types — quickly and professionally</p>
                <Link className={styles.cta} href={'/#contact'}>Request Emergency Repair</Link>
            </div>
        </div>
    );
}

export default BolierProblems;

const points = [
    {
        icon: '🔧',
        title: 'Low pressure or no heat',
        desc: 'System not heating properly or pressure gauge showing red'
    },
    {
        icon: '🔊',
        title: 'Strange noises',
        desc: 'Banging, whistling, or gurgling sounds from your boiler'
    },
    {
        icon: '💧',
        title: 'Leaks or Drips',
        desc: 'Water leaking from pipes, valves, or the boiler unit'
    }
];