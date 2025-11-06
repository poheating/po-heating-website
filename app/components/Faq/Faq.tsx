'use'
import FAQs from '@/components/faqs-section-two';
import styles from './styles.module.css'

const Faq = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; Faq</h2>
                    <h3>Your Questions Answered</h3>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.par}>
                        Have questions about your boiler, radiator, or gas cooker? Our expert Gas Safe engineer in Weston-super-Mare provides clear answers and practical tips to keep your home safe, warm, and efficient.
                    </p>
                    <FAQs />
                </div>
            </div>
        </div>
    );
}

export default Faq;