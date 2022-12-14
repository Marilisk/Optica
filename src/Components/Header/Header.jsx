import c from './Header.module.scss';
import logo from './../../assets/header/full-violet-logo.png';
import shopLocation from './../../assets/header/icons/shopLocation.svg';
import { Heart } from './../../assets/icons/Heart.jsx';
import cart from './../../assets/header/icons/cart.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton/LoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { setfullHeaderTheme, toggleLoginModalOpened, toggleMenuOpened } from '../../redux/headerSlice';
import { MobileHeader } from './MobileHeader';
import { MenuOptions } from './MenuOptions/MenuOptions';


export const Header = ({ fullHeader, favoritesCount }) => {

    const dispatch = useDispatch();
    const menuOpened = useSelector(state => state.header.menuOpened);
    const loginModalOpened = useSelector(state => state.header.loginModalOpened);
    const mainMenu = useSelector(state => state.header.mainMenu);

    const navigate = useNavigate();
    //console.log(navigate)

    const menu = mainMenu.map(btn => {
        return <div key={btn.name} className={c.navLinkWrap}
            onMouseOver={() => dispatch(toggleMenuOpened(btn.name))}
            onMouseLeave={() => dispatch(toggleMenuOpened(null))} >

            <div className={c.navItem}  >
                <NavLink to={btn.url}>
                    <span onClick={() => navigate(`lenses`)}>{btn.name}</span>
                    {menuOpened === btn.name &&
                        <div className={c.accordeon}>
                            <MenuOptions links={btn.links} />
                        </div>
                    }
                </NavLink>
            </div>

        </div>
    })

    //console.log('favcount ' + favoritesCount)
    //console.log(Boolean(favoritesCount))

    return <>
        <MobileHeader mainMenu={mainMenu}
            toggleLoginModalOpened={(value) => dispatch(toggleLoginModalOpened(value))}
            loginModalOpened={loginModalOpened}
            dispatch={dispatch} />

        <div className={c.wideWrapper}>
            <div className={c.mainWrapper} style={fullHeader ? null : { border: 'none' }} >

                <div onClick={() => dispatch(setfullHeaderTheme(true))}
                    className={c.logoWrap}
                    style={fullHeader ? null : { border: 'none' }}>
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
                                <NavLink to='offlineshop'>
                                    <img alt='' src={shopLocation} />
                                    <p>??????????????</p>
                                </NavLink>
                            </div>
                            <LoginButton toggleLoginModalOpened={(value) => dispatch(toggleLoginModalOpened(value))}
                                loginModalOpened={loginModalOpened} dispatch={dispatch} />

                            <div className={c.menuItem}
                                style={favoritesCount ? { 'color': '#57005C' } : null}>
                                <Heart color={favoritesCount ? '#57005C' : '#666666'} />
                                {favoritesCount ? <div className={c.countLabel}>{favoritesCount}</div> : null}
                                <p>??????????????????</p>
                            </div>
                        </>
                    }


                    <div className={c.menuItem} style={fullHeader ? null : { border: 'none' }}>
                        <img alt='' src={cart} />
                        {fullHeader && <p>??????????????</p>}
                    </div>
                </div>

            </div>
        </div>
    </>
}