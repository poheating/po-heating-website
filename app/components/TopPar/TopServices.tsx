'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.css';

const TopPar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className={styles.page}>
            <motion.p
                ref={ref}
                initial={{ color: "#e4e4e4ff" }}
                animate={{ color: isInView ? "rgb(48, 48, 48)" : "#e4e4e4ff" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <span>&quot;</span>Gain reliable comfort and peace of mind with expert heating solutions designed to keep your home warm, efficient, and safe all year round.<span>&quot;</span>
            </motion.p>
        </div>
    );
}

export default TopPar;