import c from './MenuOptions.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export const MenuOptions = ({ url }) => {
    const dispatch = useDispatch();


    return <div className={c.linkList}>
        <ul>
            <NavLink to={url}>
                <li>Все оправы</li>
            </NavLink>
            <NavLink to='/sunglasses'>
                <li>Солнечные очки</li>
            </NavLink>
            <li>Аксессуары</li>
            <li>Очки для чтения</li>
        </ul>
    </div>


}