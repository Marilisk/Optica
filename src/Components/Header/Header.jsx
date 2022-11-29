import c from './Header.module.scss';
import logo from './../../assets/header/lime-logo.png';
import shopLocation from './../../assets/header/icons/shopLocation.svg';
import heart from './../../assets/header/icons/heart.svg';
import cart from './../../assets/header/icons/cart.svg';
import { NavLink } from 'react-router-dom';
import { LoginButton } from './LoginButton/LoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModalOpened, toggleMenuOpened } from '../../redux/headerSlice';


export const Header = () => {
    const dispatch = useDispatch();
    const fullHeader = useSelector(state => state.header.fullHeader);
    const menuOpened = useSelector(state => state.header.menuOpened);
    const loginModalOpened = useSelector(state => state.header.loginModalOpened);
    const mainMenu = useSelector(state => state.header.mainMenu);

    const menu = mainMenu.map(btn => {
        return <div key={btn.name} className={c.navLinkWrap}
            onMouseOver={() => dispatch(toggleMenuOpened(btn.name))}
            onMouseLeave={() => dispatch(toggleMenuOpened(null))} >
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


    return <div className={c.mainWrapper} style={fullHeader ? null : { border: 'none' }} >

        <div className={c.logoWrap} style={fullHeader ? null : {border: 'none'}}>
            <NavLink to={`/`}>
                <img src={logo} alt="" className={c.logo} />
            </NavLink>
        </div>

        {fullHeader &&
            <div className={c.navWrap}>
                {menu}
            </div>
        }


        <div className={c.menuWrap}>
            {fullHeader &&
                <>
                    <div className={c.menuItem}>
                        <img alt='' src={shopLocation} />
                        <p>Магазин</p>
                    </div>
                    <LoginButton toggleLoginModalOpened={(value) => dispatch(toggleLoginModalOpened(value))}
                        loginModalOpened={loginModalOpened} dispatch={dispatch} />
                    <div className={c.menuItem}>
                        <img alt='' src={heart} />
                        <p>Избранное</p>
                    </div> 
                </>
            }


            <div className={c.menuItem} style={fullHeader ? null : {border: 'none'}}>
                <img alt='' src={cart} />
                {fullHeader && <p>Корзина</p>}
            </div>
        </div>

    </div>
}