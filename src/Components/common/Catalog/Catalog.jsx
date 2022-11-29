import c from './Catalog.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';


export const Catalog = ({dispatch, products, areProdsLoading}) => {
    
    if (areProdsLoading) {
        return false;
    }
    return <div className={c.catGrid}>
        {products.map(product => <ProductCard key={product._id} product={product} dispatch={dispatch} />)}

    </div>
}