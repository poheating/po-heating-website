'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.css';
import { useTranslations } from 'next-intl';

const TopPar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const t = useTranslations('TopPar');

    return (
        <div className={styles.page}>
            <motion.p
                ref={ref}
                initial={{ color: "#e4e4e4ff" }}
                animate={{ color: isInView ? "rgb(48, 48, 48)" : "#e4e4e4ff" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <span>&quot;</span>{t('quote')}<span>&quot;</span>
            </motion.p>
        </div>
    );
}

export default TopPar;