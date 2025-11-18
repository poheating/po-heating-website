'use client'
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import Link from 'next/link';

const RadiatorsCTA = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, type: 'spring' }}
                    viewport={{ once: true, amount: 0.12 }}
                >
                    <h2>Keep Your Home Warm Across Weston-super-Mare, Bristol & Bridgwater</h2>
                    <p>If you need professional radiator installation or repair, P O Heating is your trusted local partner. We provide expert heating services that keep homes warm, safe, and efficient throughout Weston-super-Mare, Bristol, and Bridgwater.</p>
                    <Link href={'/#contact'}>
                        Book your radiator service today
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default RadiatorsCTA;