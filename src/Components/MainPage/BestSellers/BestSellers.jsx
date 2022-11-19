import c from './BestSellers.module.scss';
import { Link } from 'react-router-dom';
import { AngleIcon } from '../../../assets/icons/AngleIcon';
import { useSelector } from 'react-redux';


export const BestSellers = () => {

    const currentItems = useSelector(state => state.products.items)
        .filter(item => item.buyCount > 0).map((item, ind) => {

            return <div className={c.item} key={ind}>
                {ind}
                <img alt='' src={'https://static.zennioptical.com/production/products/general/20/31/2031517-eyeglasses-front-view.jpg?im=Resize=(500)'}/>
                <p className={c.price}>
                    {item.price}
                </p>

            </div>
        } )

    return <section className={c.mainWrapper}>
        <h2>Бестселлеры</h2>
        <div>полюбившиеся нашим покупателям модели в разных категориях</div>

        <div className={c.galleryWrapper}>
            {currentItems}
            <div> </div>

        </div>
        </section>

        
    
}