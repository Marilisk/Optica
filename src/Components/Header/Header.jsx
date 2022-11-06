import c from './Header.module.scss';
import logo from './../../assets/header/lime-logo.png';
import shopLocation from './../../assets/header/icons/shopLocation.svg';
import heart from './../../assets/header/icons/heart.svg';
import cart from './../../assets/header/icons/cart.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LoginButton } from './LoginButton/LoginButton';


export const Header = () => {

    const [menuOpened, toggleMenuOpened] = useState(null);
    const onHover = (button) => {
        toggleMenuOpened(button);
    }
    const [loginModalOpened, toggleLoginModalOpened] = useState(false);

    const mainMenu = [{
        name: 'Женщины',
        url: `women`,
    },
    {
        name: 'Мужчины',
        url: `men`,
    },
    {
        name: 'Дети',
        url: `children`,
    },
    {
        name: 'Brands',
        url: `brands`,
    },
    ].map(btn => {
        return <div key={btn.name} className={c.navLinkWrap} 
                    onMouseOver={() => onHover(btn.name)}
                    onMouseLeave={() => onHover(null)}>
            <NavLink to={btn.url}>
                <div className={c.navItem}>
                    
                    <span>{btn.name}</span>
                    {menuOpened === btn.name &&
                        <div className={c.accordeon}>
                            one 
                            two

                        </div>
                    }
                </div>
            </NavLink>
        </div>
    })


    return <div className={c.mainWrapper}>

        <div className={c.logoWrap}>
            <NavLink to={`/`}>
                <img src={logo} alt="" className={c.logo} />
            </NavLink>
        </div>

        <div className={c.navWrap}>
            {mainMenu}
        </div>

        <div className={c.menuWrap}>
            <div className={c.menuItem}>
                <img alt='' src={shopLocation} />
                <p>Магазин</p>
            </div>
            <LoginButton toggleLoginModalOpened={toggleLoginModalOpened} loginModalOpened={loginModalOpened} />
            <div className={c.menuItem}>
                <img alt='' src={heart} />
                <p>Избранное</p>
            </div>

            <div className={c.menuItem}>
                <img alt='' src={cart} />
                <p>Корзина</p>
            </div>
        </div>

    </div>
}