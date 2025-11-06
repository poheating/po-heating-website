import Image from 'next/image';
import styles from './styles.module.css'
import AboutPage from '../components/AboutPage/AboutPage';

const About = () => {
    return (
        <div className={styles.page}>
            <AboutPage />
        </div>
    );
}

export default About;