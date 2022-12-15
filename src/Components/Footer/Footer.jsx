import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuth, selectIsManager } from '../../redux/authSlice';
import c from './Footer.module.scss';


export const Footer = () => {
    const isManager = useSelector(selectIsManager);

    return <div className={c.footerWrapper}>
        

        <section>

        <div className={c.column}>
            <h3>Информация</h3>
            <div>Отследить заказ</div>
            <div>Задать вопрос</div>
            {isManager && <Link to='/manage'><div>Создать товар</div></Link>}
        </div>
        <div className={c.column}>
            <h3>Популярное</h3>
            <div>Оправы до 4 900 рублей</div>
            <div>Аксессуары</div>
        </div>
        <div></div>
        <div></div>
        </section>
    </div>
}