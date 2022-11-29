import c from './ProductCard.module.scss';
import defaultGlasses from './../../../assets/common/defaultGlasses.webp';
import { NavLink } from 'react-router-dom';
import { setCurrentProd } from '../../../redux/productsSlice';


export const ProductCard = ({dispatch, product}) => {

    //console.log(product)
    
    const price = product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

    return <div className={c.wrap} onClick={() => dispatch(setCurrentProd(product))} >
        <NavLink to={`/product/${product._id}`}> 
            <img src={product.imageUrl.main ? `http://localhost:4444${product.imageUrl.main}` : defaultGlasses} alt='' />
            
            <div className={c.price}>
                {price}
            </div>
        </NavLink>


    </div>
}