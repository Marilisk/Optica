
//import { Link, NavLink } from 'react-router-dom';
import { Offer } from '../Offer/Offer';
import c from './MainPage.module.scss';
import womanShops from './../../assets/mainPage/another-woman.jpg';
import shopByStyle from './../../assets/mainPage/shop-by-style.webp';
import shopByColor from './../../assets/mainPage/shop-by-color.webp';
import shopByFace from './../../assets/mainPage/shop-by-shape.webp';
import angleRight from './../../assets/icons/angle-right.svg';
import limeAngleRight from './../../assets/icons/angle-right-Lime.svg'
import shopWomen from './../../assets/mainPage/women_eyewear.jpg';
import shopKids from './../../assets/mainPage/kids_eyewear.webp';
import shopMen from './../../assets/mainPage/man-optic-shop.jpg';

export const MainPage = () => {

    return <>

        <div className={c.firstRow}>
            {/* <div className={c.bg}>  ds</div> */}
            <img alt='' src={womanShops} />

            <div>
                <h2>Современные линзы</h2>
                и лучшие цены на оправы мировых брендов
            </div>
        </div>
        <Offer />

        <section className={c.shopBy}>
            <div>
                <img alt='' src={shopByStyle} />
                <p>Подбор по форме оправы</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <img className={c.icon} src={angleRight} alt='' />
                </div>
            </div>

            <div>
                <img alt='' src={shopByColor} />
                <p>Подбор по цвету</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <img className={c.icon} src={angleRight} alt='' />
                </div>
            </div>

            <div>
                <img alt='' src={shopByFace} />
                <p>Подбор по форме лица</p>
                <div className={c.shopByLink}>
                    <span>Cмотреть</span>
                    <img className={c.icon} src={angleRight} alt='' />
                </div>
            </div>

        </section>

        <section className={c.shopBy}>
            <div>
                <img alt='' src={shopWomen} />
                <h2>Женские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <img className={c.icon} src={limeAngleRight} alt='' />
                </div>
            </div>

            <div>
                <img alt='' src={shopMen} />
                <h2>Мужские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <img className={c.icon} src={limeAngleRight} alt='' />
                </div>
            </div>

            <div>
                <img alt='' src={shopKids} />
                <h2>Детские очки</h2>
                <div className={c.bestSellers}>
                    <span>Бестселлеры</span>
                    <img className={c.icon} src={limeAngleRight} alt='' />
                </div>
            </div>

        </section>



        {/* <NavLink to={`women`}>
            <div className={c.navItem}>
                <span>Женщины</span>
            </div>
        </NavLink> */}


        {/*  <ShopByColor />

        <BestSellers />

        <NewArrivals />

        <Loyalty /> */}


        <section className={c.shopProcessSection}>
            <div className={c.shopProcessWrap}>
                <div>
                    <h2>
                        Будьте готовы выглядеть сногшибательно в новых очках. Подберите оправу онлайн и примерьте при личном визите
                    </h2>
                </div>

                <div>
                    <p>
                        Каждый должен иметь доступ к высококлассным и при этом доступным средствам коррекции зрения. Поэтому мы тщательно выбираем актуальные модели оправ и отслеживаем появление новыч технологичных линз.
                        Наши цены стартуют с 1 999 руб. для оправы с простыми линзами. Однако в нашем арсенале - очень интересные варианты УФ-блокирующих, рецептурных, гибких и безопасны детских очков.
                    </p>
                    <p>
                        Выберите понравившиеся модели на сайте и к Вашему приезду в магазин мы подготовим их для максимально комфортного и быстрого процесса выбора.
                        После быстрого иготовления (до трёх дней) курьер доставит готовую оправу по удобному Вам адресу.
                    </p>
                </div>
            </div>
        </section>
    </>
}