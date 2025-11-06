import Link from 'next/link';
import styles from './styles.module.css'
import { PhoneCallIcon } from 'lucide-react';

const Hero = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.headers}>
                    <h1>Trusted Gas & Heating Engineer in Weston-super-Mare</h1>
                    <p>Local expert in boiler servicing, heating repairs, and smart control installations across Weston-super-Mare and Somerset.</p>
                </div>
                <div className={styles.cta}>
                    {/* <Link href={'/#contact'} className={styles.cta1}>
                        <div className={styles.btnTop}>
                            Call me now <span><PhoneCallIcon /></span>
                        </div>
                        <div className={styles.btnBottom}>
                            <div className={styles.phoneNumber}>
                                (+44 7764 380450)
                            </div>
                        </div>
                    </Link> */}
                    <Link href={'/#contact'} className={styles.cta1}>
                        <div className={styles.btnTop}>
                            Call me now <span><PhoneCallIcon /></span>
                        </div>
                    </Link>
                    <Link href={'/#services'} className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/20 transition">Services</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;