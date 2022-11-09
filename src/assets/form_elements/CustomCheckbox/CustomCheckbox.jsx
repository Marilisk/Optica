import c from './CustomCheckbox.module.scss';



export const CustomCheckbox = ({rememberMe, onChange }) => {

    return <div className={rememberMe ? c.checked : c.wrap }>
       
       
            <input name='rememberMe'
                id='rememberMe'
                type='checkbox'
                value={rememberMe}
                className={c.checkBx}
                onChange={onChange /* () => onChange(!rememberMe) */} />
            <label htmlFor='rememberMe'>Запомнить меня</label>
    </div>


}