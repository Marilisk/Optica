import c from './Header.module.scss';
import logo from './../../assets/header/lime-logo.png';
import { Link, NavLink } from 'react-router-dom';


export const Header = () => {

    return <div className={c.mainWrapper}>
        <div className={c.logoWrap}>
            <img src={logo} alt="" className={c.logo} />
        </div>
        <div className={c.navWrap}>
            <NavLink to={`women`}>
                <div className={c.navItem}>
                    <span>Женщины</span>
                </div>
            </NavLink>
            
            <NavLink to={`men`}>
                <div className={c.navItem}>
                    <span>Мужчины</span>

                </div>
            </NavLink>

            <NavLink to={`children`}>
            <div className={c.navItem}>
                <span>Дети</span>
            </div>
            </NavLink>
            
            <NavLink to={`brands`}>
            <div className={c.navItem}>
                <span>Brand</span>
            </div>
            </NavLink>
        </div>
        <div className={c.menuWrap}></div>



        <div className={c.menuItem}>
            <span>Поиск</span>
        </div>
        <div className={c.menuItem}>
            <span>Войти</span>
        </div>
        <div className={c.menuItem}>
            <span>Избранное</span>
        </div>
        <div className={c.menuItem}>
            <span>Помощь</span>
        </div>
        <div className={c.menuItem}>
            <span>Корзина</span>
        </div>

    </div>
}