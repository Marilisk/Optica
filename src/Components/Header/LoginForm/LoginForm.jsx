import c from './LoginForm.module.scss';
import { useState } from 'react';
import { CustomCheckbox } from '../../../assets/form_elements/CustomCheckbox/CustomCheckbox';


export const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: null,
        password: null,
        rememberMe: false,
    });

    const handleSubmit = () => {
        console.log(loginData);
    }

   
    return <div className={c.wrap}>
        <form onSubmit={handleSubmit}>
            <input name='email'
                type='text'
                value={loginData.email}
                placeholder='e-mail'
                onChange={(e) => setLoginData({ ...loginData, email: e.currentTarget.value })}
            />
            <input name='password'
                type='password'
                value={loginData.password}
                placeholder='пароль'
                onChange={(e) => setLoginData({ ...loginData, password: e.currentTarget.value })}
            />

            <button type='submit'>
                 ВОЙТИ
            </button>

            <div className={c.underBtn}>
                <CustomCheckbox rememberMe={loginData.rememberMe}
                    onChange={(value) => setLoginData({ ...loginData, rememberMe: value })} />
            <span>забыли пароль?</span>    
            </div>
            

        </form>
       

    </div>

}