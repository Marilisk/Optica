
import { useSelector } from 'react-redux';
import c from './Offer.module.scss';
import defaultGlasses from './../../assets/common/defaultGlasses.webp';



export const Offer = () => {

    const categories = useSelector(state => state.categories.categories);
    
    const firstLevelCategories = categories.filter(cat => cat.fields.level === 1).map(cat => {
        return <div key={cat.pk}>
            <img src={defaultGlasses} alt='' />
            {cat.fields.name}
        </div>
    });

    const secondLevelCategories = categories.filter(cat => cat.fields.level === 2).map(cat => {
        return <div key={cat.pk}>
            <img src={defaultGlasses} alt='' />
            {cat.fields.name}
        </div>
    });



    return <div className={c.mainWrapper}>
        <h2>
            Очки для Всех
        </h2>
        <p>
            Рецептурные очки с линзами уже от 1 999 руб.
        </p>
        <div className={c.carousel}>
            {firstLevelCategories}

        </div>
        <div className={c.carousel}>
            {secondLevelCategories}
        </div>
    </div>
}