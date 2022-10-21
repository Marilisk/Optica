import c from './ProductCard.module.scss';
import defaultGlasses from './../../../assets/common/defaultGlasses.webp';


export const ProductCard = ({ product }) => {

    const price = product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

    return <div className={c.wrap}>
        <img src={product.photos[0] || defaultGlasses} alt='' />
        {/* <div>{product.name}</div> */}

        <div className={c.price}>
            {price}
        </div>






    </div>
}