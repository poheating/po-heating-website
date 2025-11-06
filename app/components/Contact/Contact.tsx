import { Mail, Phone, PhoneCall } from 'lucide-react';
import styles from './styles.module.css'

const Contact = () => {
    return (
        <div className={styles.page} id='contact'>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; Contact</h2>
                    <h3>Get in Touch with Your Local Heating Expert</h3>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.par}>Need a boiler service, radiator repair, or gas cooker installation? P.O. Heating provides professional heating solutions for homeowners in Weston-super-Mare and surrounding areas.
                        Reach out today to book a service, request a quote, or get expert advice from a certified Gas Safe engineer. We’re committed to keeping your home safe, warm, and energy-efficient.</p>
                    <div className={styles.right}>
                        <h4>Contact Information</h4>
                        <p><span>Paweł Olszewski</span></p>
                        <div className={styles.contactWays}>
                            <p><PhoneCall size={22}/><a href="tel:+447764380450">+44 7764 380450</a></p>
                            <p><Mail size={22}/><a href="mailto:poheating@outlook.com">poheating@outlook.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;