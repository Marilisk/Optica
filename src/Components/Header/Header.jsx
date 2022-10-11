import c from './Header.module.css';
import logo from './../../assets/header/zenni-logo.webp';


export const Header = () => {

    return <div>
        <div className={c.logoWrap}>
            <img src={logo} alt="" />
        </div>
        <div className={c.navWrap}>
            <div>Женщины</div>
            <div>Мужчины</div>
            <div>Дети</div>
            <div></div>
        </div>
        <div className={c.menuWrap}></div>



        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}