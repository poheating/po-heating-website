'use client'
import { Award, CircleDollarSign, ClipboardCheck, FastForward, MessageSquare, Paperclip, PersonStanding, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
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


const WhyUs = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; why us</h2>
                    <h3>Our Promise of Quality & Safety</h3>
                </div>

                <motion.div
                    className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.23 }}
                >

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <Shield size={54} />
                        </motion.div>
                        <h4>Premium-Grade Components</h4>
                        <p>We only use parts and materials tested for durability and energy efficiency.</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <ClipboardCheck size={54} />
                        </motion.div>
                        <h4>Comprehensive Safety Checks</h4>
                        <p>Each project undergoes rigorous leak, pressure, and performance testing.</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <Award size={54} />
                        </motion.div>
                        <h4>Workmanship Guarantee</h4>
                        <p>Every installation is backed by our satisfaction and quality assurance promise.</p>
                    </div>

                    <div className={styles.point}>
                        <motion.div className={styles.iconWrapper} variants={itemVariants}>
                            <MessageSquare size={54} />
                        </motion.div>
                        <h4>Transparent Service</h4>
                        <p>Clear communication, honest pricing, and no hidden extras — ever.</p>
                    </div>

                </motion.div>

                <div className={styles.cta}>
                    <Link href={'/#contact'}>
                        Call me now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;