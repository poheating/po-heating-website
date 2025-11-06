'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h2>&mdash; &nbsp; About me</h2>
                <h3>Gas Engineer in Weston-super-Mare</h3>

                <div className={styles.bottom}>
                    <Image src={'/images/main-about.jpg'} width={600} height={600} alt='po heating services' />
                    <div className={styles.par}>
                        <p>P O Heating, founded by Paweł Olszewski, provides reliable <span>heating and gas services across Weston-super-Mare and North Somerset.</span></p>

                        <p>As a qualified <span>Gas Safe engineer</span>, Paweł specialises in <span>boiler servicing, repairs, radiator installations, and smart heating controls</span> — always with a focus on safety, efficiency, and customer satisfaction.</p>

                        <p>Whether you need an annual boiler check, a leak repaired, or a new heating system installed, you can count on friendly, professional service and honest advice.
                            At P O Heating, we keep homes warm, safe, and energy-efficient — all year round.</p>
                        <ul className={styles.points}>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Qualified Gas Safe Engineer
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Comprehensive Heating Services
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Reliable Local Service
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;