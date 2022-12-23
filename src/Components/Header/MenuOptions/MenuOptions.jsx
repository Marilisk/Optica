import c from './MenuOptions.module.scss';
import { NavLink } from 'react-router-dom';


export const MenuOptions = ({ links }) => {

    const linksList = links.map((link) => {

        return <div key={link.name} className={c.linkList}>
            <ul>
                <NavLink to={link.to}>
                    <li>{link.label}</li>
                </NavLink>
            </ul>
        </div>
    })

    return <>{linksList}</>
     
}