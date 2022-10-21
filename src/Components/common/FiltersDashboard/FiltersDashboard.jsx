import c from './FiltersDashboard.module.scss';
import sortDownIcon from './../../../assets/icons/sortDown.svg';
import sortUpIcon from './../../../assets/icons/sortUp.svg';
import smallCross from './../../../assets/icons/smallCross.svg';
import { useState } from 'react';


export const FiltersDashboard = ({ filterOptions, selectFilter }) => {


    const [filterOpened, toggleFilterOpened] = useState(null);
    const onHover = (filterId) => {
        toggleFilterOpened(filterId);
    }

    return <>
        <section className={c.menuBar}>
            <div className={c.filters}>
                <div className={c.selectedfilters}>
                    100 товаров:
                    {filterOptions.filter(elem => elem.isSelected).map(elem => {
                        return <div key={elem.id}>
                            {elem.name}: {elem.chosenOptions.map(el => <span>{el} <img alt='' src={smallCross} onClick={() => selectFilter(elem.id, el)} /> </span>)}
                        </div>
                    })}
                </div>

                <div className={c.filtersOptions}>
                    {filterOptions.map(elem => {
                        return <div key={elem.name} className={filterOpened === elem.id ? c.filterName : c.otherFilterName} onMouseOver={() => onHover(elem.id)} onMouseLeave={() => onHover(null)} >
                            {elem.name} <img alt='' src={filterOpened === elem.id ? sortUpIcon : sortDownIcon} />
                            <div key={elem.name + 'd'} className={c.filterMenu}>
                                <div key={elem.name + 'e'} className={filterOpened === elem.id ? c.accordeon : c.hiddenAccordeon} >
                                    {elem.options?.map(el => {
                                        return <div key={el + 'c'} className={c.filterCheckBoxWrapper}>
                                            <label key={el + 'l'} className={c.filterCheckBoxLabel}>
                                                <input key={el}
                                                    type={'checkbox'}
                                                    value={el}
                                                    name={'checkbox'}
                                                    checked={elem.chosenOptions.find(it => it === el)}
                                                    onChange={() => selectFilter(elem.id, el)} />
                                                {el}
                                            </label>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>

        <section className={c.sortBoard}>
            <div></div>
            <div></div>
            <div></div>

        </section>


        <div></div>
    </>
}