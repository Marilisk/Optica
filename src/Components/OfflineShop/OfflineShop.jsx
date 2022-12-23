import c from './OfflineShop.module.scss';
import React from 'react';
import { BreadCrumbs } from '../common/BreadCrumbs/BreadCrumbs';
import { memo, useEffect, useState } from 'react';
import instance from '../../redux/API/api';

const Small = React.memo( () => {
    console.log('I m a small component');

    return <div>I'm a small component</div>
})

//const MemoSmall = memo(Small);

export const OfflineShop = ({ }) => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prev => prev +1)
    }

    return <>
        <BreadCrumbs text={'Наш магазин'} />

        <section className={c.mainSection}>
            <h1>Мы находимся</h1>
            <div>
                <h2>{count}</h2>

                <Small />
                <button onClick={() => increase()}>
                    press!
                </button>
            </div>
        </section>
    </>
}
