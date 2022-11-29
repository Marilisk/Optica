import c from './LoginButton.module.scss';
import user from './../../../assets/header/icons/user.svg';
import { LoginForm } from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../../redux/authSlice';


export const LoginButton = ({ toggleLoginModalOpened, loginModalOpened, dispatch }) => {
    
    const isAuth = useSelector(selectIsAuth);
    //console.log('header isauth');
    //console.log(isAuth);

    //const loginData = useSelector(state => state.auth.loginData);
    //console.log(loginData)

    return <div>
        <div className={c.menuItem}
            onClick={ !isAuth ? () => toggleLoginModalOpened(!loginModalOpened) : () => {
                window.confirm('Уверены, что хотите выйти?');
                dispatch(logout());
                window.localStorage.removeItem('token');
            }  }
            style={loginModalOpened ? { background: '#FAFAFA' } : null}>
            <img alt='' src={user} />
            { isAuth ? <p>Выйти</p> : <p>Войти</p> }
        </div>

        <div className={loginModalOpened ? c.modal : c.hiddenModal} >
            
            <h2>Авторизуйтесь:</h2>
            <LoginForm toggleLoginModalOpened={toggleLoginModalOpened} dispatch={dispatch}  />
            <div className={c.signUpOffer} onClick={() => toggleLoginModalOpened(false)}>
                Впервые у нас? Зарегистрируйтесь!
                <Link to='login'>
                    Создать аккаунт
                </Link>

            </div>
        </div>

    </div>

}