import { useFormik } from 'formik';

export const formik = useFormik({
    initialValues: {
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
    },
    onSubmit: (values, actions) => {
        console.log('submit');
        console.log(values);
    }
})


