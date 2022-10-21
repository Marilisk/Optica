import c from './Catalog.module.scss';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';


export const Catalog = () => {
    const products = useSelector(state => state.products.items);
    
    return <section className={c.catGrid}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}

    </section>
}