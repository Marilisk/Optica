import c from './LoginButton.module.scss';
import user from './../../../assets/header/icons/user.svg';
import { LoginForm } from '../LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';



export const LoginButton = ({ toggleLoginModalOpened, loginModalOpened }) => {




    return <div>
        <div className={c.menuItem}
            onClick={() => toggleLoginModalOpened(!loginModalOpened)}
            style={loginModalOpened ? { background: '#FAFAFA' } : null}>
            <img alt='' src={user} />
            <p>Войти</p>

            <div>

            </div>
        </div>

        <div className={loginModalOpened ? c.modal : c.hiddenModal} >
            {/* <div className={c.transparent}></div> */}
            <h2>Авторизуйтесь:</h2>
            <LoginForm />

        
            <div className={c.signUpOffer}>
                Впервые у нас? Зарегистрируйтесь!
                <NavLink to='signup'>
                    Создать аккаунт
                </NavLink>

            </div>
        </div>

    </div>

}