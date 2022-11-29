import c from './BestSellers.module.scss';
import { AngleIcon } from '../../../assets/icons/AngleIcon';
import { useDispatch, useSelector } from 'react-redux';
import { anotherBestsellers } from '../../../redux/productsSlice';


export const BestSellers = () => {
    const portion = useSelector(s => s.products.bestsellersPortion);

    const dispatch = useDispatch();
    const showPrev = () => {
        if (portion) { dispatch(anotherBestsellers(false)) }
    }
    const showNext = () => {
        dispatch(anotherBestsellers(true));
    }
    
    const currentItems = useSelector(state => state.products.products.items)
        .filter(item => item.buyCount > 0)
        .slice(portion*3, (portion*3 + 3))
        .map((item, ind) => {
            const price = item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

            return <div className={c.item} key={ind}>

                <img alt='' src={item.photos[0]} />
                <p className={c.price}>
                    {ind} | {price}
                </p>

            </div>
        })

    //console.log(useSelector(state => state.products.items.filter(item => item.buyCount > 0).slice(portion, (portion + 3))))

    return <section className={c.mainWrapper}>
        <h2>Бестселлеры</h2>
        <div className={c.underH2}>
            полюбившиеся нашим покупателям модели в разных категориях
        </div>
        <div className={c.galleryWrapper}>
        <AngleIcon color={portion ? '#95009C' : '#D8D1CA'} size={40} 
                   margin={'106px auto auto 20px'}
                   transform={'rotate(180deg)'} 
                   showAnother={showPrev} />
            {currentItems}
        <AngleIcon color={'#95009C'} size={40} 
                   margin={'106px 20px auto auto'} 
                   showAnother={showNext} />

        </div>
    </section>



}