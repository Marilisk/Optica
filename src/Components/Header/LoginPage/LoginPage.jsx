import c from './LoginPage.module.scss';
import { useEffect } from 'react';
import { CustomCheckbox } from '../../../assets/form_elements/CustomCheckbox/CustomCheckbox';
import { useDispatch, useSelector } from 'react-redux';
import { setfullHeaderTheme } from '../../../redux/headerSlice';
import { useFormik } from 'formik';
import { submitLoginForm } from '../../../redux/loginSlice';
import { useState } from 'react';


export const LoginPage = () => {
    const [isLoginTab, setIsLoginTab] = useState(false);

    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login.loginData);

    useEffect(() => {
        dispatch(setfullHeaderTheme(false))
    })

    const formik = useFormik({
        initialValues: {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
        },
        onSubmit: (values, actions) => {
            console.log('submit');
            console.log(values);
            dispatch(submitLoginForm(values));
            dispatch(setfullHeaderTheme(true));
        }
    })

    return <div className={c.wrap}>
        <div className={c.tabWrap}>
            <div className={isLoginTab ? c.activeTab : c.tab} onClick={()=> setIsLoginTab(true)}>
                ВОЙТИ
            </div>
            <div className={isLoginTab ? c.tab : c.activeTab}onClick={()=> setIsLoginTab(false)}>
                ЗАРЕГИСТРИРОВАТЬСЯ
            </div>
        </div>


        <form onSubmit={formik.handleSubmit}>
            <input name='email'
                type='text'
                value={formik.values.email}
                placeholder='email'
                onChange={formik.handleChange}
            />
            <input name='password'
                type='password'
                value={formik.values.password}
                placeholder='пароль'
                onChange={formik.handleChange}
            />

            <button type='submit'>
                ВОЙТИ
            </button>

            <div className={c.underBtn}>
                <CustomCheckbox rememberMe={formik.values.rememberMe}
                    onChange={formik.handleChange} />
                <span>забыли пароль?</span>
            </div>

        </form>

    </div>

}