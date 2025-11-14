'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';


const GasAppliancesAbout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; About the Service</h2>
                    <h3>Cookers and hobs installed with precision and care</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/gas-appliances-about-img.webp'} width={800} height={800} alt='Radiators Installations & Repairs' />
                    <div>
                        <p className={styles.sectionPar}>
                            We provide complete <span>new cookers and gas hobs installation</span> services for homeowners and landlords across Weston-super-Mare, Bristol, and Bridgwater. <span>From connecting new cookers to replacing existing hobs</span>, every job is handled with precision, care, and attention to safety.
                        </p>
                        <div className={styles.points}>
                            {
                                points.map((point, i) => (
                                    <motion.h4
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.85, type: 'spring', delay: 0.1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        key={i}
                                        ><span><CheckCircle /></span>{point.title}</motion.h4>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GasAppliancesAbout;

const points = [
    {
        title: 'Safe connection to your existing gas supply'
    },
    {
        title: 'Removal of old appliances (if required)'
    },
    {
        title: 'Testing for leaks and performance'
    },
    {
        title: 'Neat, clean finish — ready to use immediately'
    }
]