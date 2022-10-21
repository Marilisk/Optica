
//import { Link, NavLink } from 'react-router-dom';
import { Offer } from '../Offer/Offer';
import c from './MainPage.module.scss';



export const MainPage = () => {

    return <div className={c.mainWrapper}>
        <Offer />
        {/* <NavLink to={`women`}>
            <div className={c.navItem}>
                <span>Женщины</span>
            </div>
        </NavLink> */}


       {/*  <ShopByColor />

        <BestSellers />

        <NewArrivals />

        <Loyalty /> */}

    </div>
}