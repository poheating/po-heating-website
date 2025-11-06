'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

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
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                {/* section 1 */}
                <div className={styles.section1Content}>
                    <div className={styles.pageHeading}>
                        <h1>&mdash; &nbsp; about us</h1>
                        <h2>Trusted <motion.span
                            initial={{ color: '#303030' }}
                            whileInView={{ color: '#ff6600' }}
                            transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
                            viewport={{ once: true }}>Gas & Heating Services</motion.span> in Weston-super-Mare. <br />
                            Keeping homes safe, warm, and efficient</h2>
                    </div>
                    <Image priority src={'/images/about-hero.webp'} width={1300} height={1300} alt='Gas & Heating Services in Weston-super-Mare.' />
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
                        <h2>&mdash; &nbsp; our story</h2>
                        <h3>A Local Heating Engineer You Can Trust</h3>
                    </div>
                    <div className={styles.section2Content}>
                        <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/about-section2.webp'} width={800} height={800} alt='Local Heating Engineer in Weston-super-Mare.' />
                        <div>
                            <p className={styles.sectionPar}>
                                My name is Paweł Olszewski and I am the founder of PO Heating. I am a certified Gas Safe engineer in Weston-super-Mare.
                                With <span>years of hands-on experience in boiler repairs, heating installations, and smart control systems</span>, I built PO Heating on three simple values — safety, reliability, and honest service.
                            </p>
                            <p className={styles.sectionPar}>
                                Every home deserves efficient, affordable heating — and that’s what <span> we deliver across Weston-super-Mare and North Somerset</span>. Whether it’s a small leak or a full system upgrade, you can expect precision workmanship and personal care on every job.
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
                        <h2>Ready to Book Your Heating Service in Weston-super-Mare?</h2>
                        <p>Keep your home safe, warm, and energy-efficient with trusted heating and gas services from PO Heating.
                            Whether you need a quick boiler repair, an annual service, or a full heating upgrade, we’re here to help — always certified, professional, and local.</p>
                        <Link href={'/#contact'}>
                            Call me
                        </Link>
                    </motion.div>
                </div>

                {/* section 3 */}
                <div className={styles.section3}>
                    <div className={styles.sectionHeading}>
                        <h2>&mdash; &nbsp; why us</h2>
                        <h3>Quality Heating Care for Every Home in Weston-super-Mare</h3>
                    </div>
                    <div className={styles.section3Content}>
                        <div>
                            <p className={styles.sectionPar}>
                                Choosing the right heating engineer matters — and at PO Heating, we take pride in long-term customer relationships.
                                We’re not a big corporate company — we’re your local expert, always just a call away when your home needs professional attention.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className={styles.donePoints}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}>
                        <motion.p variants={itemVariants}><span><Check /></span> Friendly, personal service from a qualified engineer</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> Transparent pricing with no hidden extras</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> Fast response across Weston-super-Mare and nearby towns</motion.p>
                        <motion.p variants={itemVariants}><span><Check /></span> Guaranteed workmanship and honest advice</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

const heroPoints = [
    {
        icon: '🔧',
        title: 'Safety First',
        desc: 'Always Gas Safe certified and compliant with UK standards.'
    },
    {
        icon: '🌡️',
        title: 'Efficiency & Comfort',
        desc: 'Smart solutions that save energy and improve performance.'
    },
    {
        icon: '💬',
        title: 'Honesty & Transparency',
        desc: 'Clear communication, no hidden costs.'
    },
]