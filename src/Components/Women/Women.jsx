import c from './Women.module.scss';
import mainImg from './../../assets/women/main/mainImg.jpg';
import { BreadCrumbs } from '../common/BreadCrumbs/BreadCrumbs';
import { FiltersDashboard } from '../common/FiltersDashboard/FiltersDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { onSelectFeature } from '../../redux/featuresSlice.js';
import { Catalog } from '../common/Catalog/Catalog';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/productsSlice';

export const Women = () => {
    const products = useSelector(state => state.products.products);
    //console.log(products);

    const areProdsLoading = products.status === 'loading';
    const features = useSelector(state => state.features.features);

    const dispatch = useDispatch();
    const onSelectFeature = (feature, option) => {
        dispatch(onSelectFeature({feature, option}))
    }

    useEffect( ()=> {
        dispatch(fetchProducts());
    }, [dispatch]);

    return <>
        <BreadCrumbs text={'Женские очки'} />

        <section className={c.mainSection}>
            <div className={c.mainDescription}>
                <div className={c.mainDescriptionWrap}>
                    <h2>
                        Женские очки
                    </h2>
                    <p>
                        От классических овальных до экстравагантных кошачьих глаз - что бы Вы не искали, у нас найдётся идеальная женская оправа. Наши модели для девушек включают цвета, модели и формы, которые Вам понравятся. А ещё затемнение линз для особого шарма!
                    </p>
                </div>
            </div>
            <div className={c.mainImgBlock}>
                <img alt='' src={mainImg} className={c.mainImg} />
            </div>

        </section>

        <FiltersDashboard features={features} onSelectFeature={onSelectFeature} />

        <Catalog dispatch={dispatch} products={products.items} areProdsLoading={areProdsLoading} />

        <section className={c.sortBoard}>
            <div></div>
            <div></div>
            <div></div>

        </section>
        <div></div>
    </>
}