import BolierProblems from '../components/BolierServicesPage/BolierProblems/BolierProblems';
import BoliersServicingToInstalation from '../components/BolierServicesPage/BoliersServicingToInstalation/BoliersServicingToInstalation';
import BolierServicesHero from '../components/BolierServicesPage/Hero/page';
import SmartBolierControls from '../components/BolierServicesPage/SmartBolierControls/SmartBolierControls';
import styles from './styles.module.css'

const BolierServices = () => {
    return ( 
        <div className={styles.page}>
            <BolierServicesHero />
            <BolierProblems />
            <BoliersServicingToInstalation />
            <SmartBolierControls />
        </div>
     );
}
 
export default BolierServices;