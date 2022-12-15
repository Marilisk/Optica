import c from './Sunglasses.module.scss';
import mainImg from './../../assets/women/main/mainImg.jpg';
import { BreadCrumbs } from '../common/BreadCrumbs/BreadCrumbs';
import { FiltersDashboard } from '../common/FiltersDashboard/FiltersDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterOptions, selectFilter } from '../../redux/featuresSlice.js';
import { Catalog } from '../common/Catalog/Catalog';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/productsSlice';
import { filterProducts } from '../../assets/functions/filterProducts';

export const Sunglasses = () => {
    const products = useSelector(state => state.products.products);
    const goodsAmount = products.items.length;

    //console.log(products.items);

    const areProdsLoading = products.status === 'loading';
    const filters = useSelector(state => state.filters.features);
    const selectedFilters = useSelector(state => state.filters.features.filter(elem => elem.isSelected));

    const dispatch = useDispatch();
    const onSelectFilter = (feature, option) => {
        //console.log({feature, option})
        dispatch(selectFilter({feature, option}) )
    }

    const filtered = filterProducts(products.items, selectedFilters);

    useEffect( ()=> {
        dispatch(fetchProducts());
        dispatch(fetchFilterOptions('features'));
        dispatch(fetchFilterOptions('color'));
    }, [dispatch]);

    return <>
        <BreadCrumbs text={'Солнечные очки'} />

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

        <FiltersDashboard filters={filters} onSelectFilter={onSelectFilter} goodsAmount={goodsAmount} dispatch={dispatch} />

        <Catalog dispatch={dispatch} products={/* products.items */ filtered} areProdsLoading={areProdsLoading} />

        <section className={c.sortBoard}>
            <div></div>
            <div></div>
            <div></div>

        </section>
        <div></div>
    </>
}