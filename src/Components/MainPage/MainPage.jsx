import { Offer } from '../Offer/Offer';
import c from './MainPage.module.scss';
import womanShops from './../../assets/mainPage/another-woman.jpg';
import shopByStyle from './../../assets/mainPage/shop-by-style.webp';
import shopByColor from './../../assets/mainPage/shop-by-color.webp';
import shopByFace from './../../assets/mainPage/shop-by-shape.webp';
import shopWomen from './../../assets/mainPage/women_eyewear.jpg';
import shopKids from './../../assets/mainPage/kids_eyewear.webp';
import shopMen from './../../assets/mainPage/man-optic-shop.jpg';
import { Link } from 'react-router-dom';
import { AngleIcon } from '../../assets/icons/AngleIcon';
import { Footer } from '../Footer/Footer.jsx';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { BestSellers } from './BestSellers/BestSellers';

export const MainPage = () => {

    return <>

        <section className={c.firstRow}>
            <img alt='' src={womanShops} />
            <div>
                <h2>Современные линзы</h2>
                <p>И лучшие цены на оправы всемирно известных брендов</p>
                <hr/>
                <h3>
                    Получите 8% скидку на первый заказ.
                </h3>
                <p className={c.subscrP}>
                    Подпишитесь на рассылку о новых поступлениях и наших акциях
                </p>

                <SubscribeForm />

            </div>
        </section>

        <section>
            <Offer />
        </section>

        <section className={c.shopBy}>
            <div>
                <img alt='' src={shopByStyle} />
                <p>Подбор по форме оправы</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <AngleIcon color={'#03424C'} size={14} margin={'9px auto auto 4px'} />
                </div>
            </div>

            <div>
                <img alt='' src={shopByColor} />
                <p>Подбор по цвету</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <AngleIcon color={'#03424C'} size={14} margin={'9px auto auto 4px'} />
                </div>
            </div>

            <div>
                <img alt='' src={shopByFace} />
                <p>Подбор по форме лица</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <AngleIcon color={'#03424C'} size={14} margin={'9px auto auto 4px'} />
                </div>
            </div>

        </section>

        <section className={c.shopBy}>
            <div>
                <img alt='' src={shopWomen} />
                <h2>Женские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <AngleIcon color={'#11A834'} size={14} margin={'6px auto auto 4px'} />
                </div>
            </div>

            <div>
                <img alt='' src={shopMen} />
                <h2>Мужские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <AngleIcon color={'#11A834'} size={10} margin={'6px auto auto 4px'} />
                </div>
            </div>

            <div>
                <img alt='' src={shopKids} />
                <h2>Детские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <AngleIcon color={'#11A834'} size={10} margin={'6px auto auto 4px'} />
                </div>
            </div>

        </section>


        <section className={c.shopProcessSection}>
            <div className={c.shopProcessWrap}>
                <div>
                    <h2>
                        Будьте готовы выглядеть сногшибательно в новых очках!
                    </h2>
                    <h2>
                        Подберите оправу онлайн и примерьте при личном визите.
                    </h2>
                    <Link to='/offline-shop'>
                        перейти к расположению магазина
                        <AngleIcon color={'#fff'} size={10} margin={'12px auto auto 4px'} />
                    </Link>
                </div>

                <div>
                    <p>
                        Каждый должен иметь доступ к высококлассным и при этом доступным средствам коррекции зрения. Поэтому мы тщательно выбираем актуальные модели оправ и отслеживаем появление новых технологичных линз.
                        Наши цены стартуют с 1 999 руб. для оправы с простыми линзами. Однако в нашем арсенале - очень интересные варианты УФ-блокирующих, рецептурных, гибких и безопасных детских очков.
                    </p>
                    <p>
                        Выберите понравившиеся модели на сайте и к Вашему приезду в магазин мы подготовим их для максимально комфортного процесса примерки.
                        После быстрого изготовления (до трёх дней) курьер доставит готовую оправу по удобному Вам адресу.
                    </p>
                </div>
            </div>
        </section>

        <BestSellers />
        {/* <section>

        </section> */}

        {/* <Footer /> */}
    </>
}