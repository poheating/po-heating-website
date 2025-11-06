import RadiatorServicesHero from '../components/RadiatorServicesPage/Hero/page';
import styles from './styles.module.css'

const radiatorNHeatingUpgrades = () => {
    return ( 
        <div className={styles.page}>
            <RadiatorServicesHero />

            {/* <BolierServicesHero />
            <BolierProblems />
            <BoliersServicingToInstalation />
            <SmartBolierControls /> */}
        </div>
     );
}
 
export default radiatorNHeatingUpgrades;