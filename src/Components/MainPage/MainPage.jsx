
import { Link } from 'react-router-dom';
import { Offer } from '../Offer/Offer';
import c from './MainPage.module.scss';



export const MainPage = () => {

    return <div className={c.mainWrapper}>
        <Offer />
        <Link to={`women`}>
        <div className={c.navItem}>
                    <span>Женщины</span>
        </div>
        </Link>
      
    </div>
}