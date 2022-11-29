import c from './ProductPage.module.scss';
import defaultGlasses from './../../../assets/common/defaultGlasses.webp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteProd, fetchProd } from '../../../redux/productsSlice.js';
import { selectIsAuth } from '../../../redux/authSlice';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const ProductPage = () => {
    const dispatch = useDispatch();

    const product = useSelector(state => state.products.currentProduct.item);
    const status = useSelector(state => state.products.currentProduct.status);

    const isAuth = useSelector(selectIsAuth);
    const userProfile = useSelector(state => state.auth.loginData?.data);
    
    const params = useParams();
    useEffect(() => {
        dispatch(fetchProd(params.id))
    }, [params.id, dispatch])

    if (status === 'loading') {
        return <div>loading...</div>;
    }
    const isOwner = isAuth && userProfile._id === product.user;
    //console.log(product)
    const size = product.frameWidth > 139 ? 'большой' 
        : product.frameWidth > 134 ? 'средний'
        : product.frameWidth > 127 ? 'маленький'
        : 'детский';
    const price = product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

    return <div className={c.wrap}>
        <BreadCrumbs text={`Женские очки. ${product.name} `} />
        <div className={c.flexWrapper}>
            <div className={c.leftPart}>

                <img className={c.mainPhoto} src={product.imageUrl.main ? `${process.env.REACT_APP_API_URL}${product.imageUrl.main}` : defaultGlasses} alt='' />

                
            </div>

            <div className={c.rightPart}>
                <h2>{product.name}</h2>
                <div className={c.size}>
                    {size}
                </div>
                <div className={c.priceWrapper}>

                    <div  className={c.price}>
                    {price}
                    </div>

                    <div className={c.priceIncludes}>
                        <p>В цену <span>уже</span> включено:</p>
                        <ul>
                            <li>высококачественная оправа</li>
                            <li>базовые рецептупные линзы</li>
                            <li>укрепляющее порытие</li>
                            <li>покрытие от ультрафиолета</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        {isOwner &&
            <div className={c.editBlock}>
                <button onClick={() => dispatch(fetchDeleteProd(product._id))}>
                    Удалить товар
                </button>
            </div>
        }



    </div>
}