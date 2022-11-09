import c from './LoginButton.module.scss';
import user from './../../../assets/header/icons/user.svg';
import { LoginForm } from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom';


export const LoginButton = ({ toggleLoginModalOpened, loginModalOpened }) => {

    return <div>
        <div className={c.menuItem}
            onClick={() => toggleLoginModalOpened(!loginModalOpened)}
            style={loginModalOpened ? { background: '#FAFAFA' } : null}>
            <img alt='' src={user} />
            <p>Войти</p>
        </div>

        <div className={loginModalOpened ? c.modal : c.hiddenModal} >
            
            <h2>Авторизуйтесь:</h2>
            <LoginForm />
            <div className={c.signUpOffer} onClick={() => toggleLoginModalOpened(false)}>
                Впервые у нас? Зарегистрируйтесь!
                <Link to='login'>
                    Создать аккаунт
                </Link>

            </div>
        </div>

    </div>

}