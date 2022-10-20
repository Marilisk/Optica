import c from './Women.module.scss';
import mainImg from './../../assets/women/main/mainImg.jpg';
import { BreadCrumbs } from '../common/BreadCrumbs/BreadCrumbs';
import { FiltersDashboard } from '../common/FiltersDashboard/FiltersDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { onSelectFilter } from '../../redux/filtersSlice';

export const Women = () => {
    const filterOptions = useSelector(state => state.filters.filterOptions);

    const dispatch = useDispatch();
    const selectFilter = (filter, option) => {
        //console.log(filter, option);
        dispatch(onSelectFilter({filter, option}))
    }

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

        <FiltersDashboard filterOptions={filterOptions} selectFilter={selectFilter} />

        <section className={c.sortBoard}>
            <div></div>
            <div></div>
            <div></div>

        </section>
        <div></div>
    </>
}