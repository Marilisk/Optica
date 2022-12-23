import c from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProd } from '../../../redux/productsSlice.js';
import { selectIsManager } from '../../../redux/authSlice';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EyewearSize } from './EyewearSize/EyewearSize';
import { Photos } from './Photos/Photos';
import { Specifications } from './Specifications/Specifications';
import { Price } from './Price/Price';
import { Preloader } from '../../../assets/common/Preloader/Preloader';
import { CustomerButtons } from './CustomerButtons/CustomerButtons';


export const ProductPage = ({ addToFavorites, removeFromFavorites, userFavorites, isLoading }) => {
    const dispatch = useDispatch();

    const status = useSelector(state => state.products.currentProduct.status);
    const product = useSelector(state => state.products.currentProduct.item);

    const IsManager = useSelector(selectIsManager);
    //const userId = useSelector(state => state.auth.loginData.data?._id);

    const params = useParams();
    const isFavorite = userFavorites?.includes(params.id);

    useEffect(() => {
        dispatch(fetchProd(params.id))
    }, [params.id, dispatch])

    if (status === 'loading' || !product /* || !userFavorites */) {
        return <Preloader minFormat={true} />;
    }

    //console.log(product);

    const price = product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });


    return <>
        <div className={c.wrap}>
            <BreadCrumbs text={`Женские очки. ${product.name} `} />
            <div className={c.flexWrapper}>

                <Photos imageUrl={product.imageUrl} />

                <div className={c.rightPart}>
                    <h2>{product.name}</h2>

                    <EyewearSize size={product.size} />
                    <Price price={price} />

                    <CustomerButtons isFavorite={isFavorite}
                                    isLoading={isLoading}
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                    productId ={product._id}  />

                </div>
            </div>
        </div>

        <Specifications product={product} dispatch={dispatch} IsManager={IsManager} />

    </>
}