import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../redux/API/api';
import c from './Administration.module.scss';
import { FilesDownloader } from './FilesDownLoader';

export const Administration = () => {

    const [images, setImages] = useState({ main: '', side: '', perspective: '' });
    const [successmsg, setSuccessMsg] = useState(null);

    const navigate = useNavigate();

    return <>
        <div className={c.adminWrapper}>
            <div className={c.formikWrapper}>
                <Formik initialValues={{
                    category: 'eyewear',
                    name: 'очки красивые тестовые',
                    code: 12345,
                    description: 'отличные очки',
                    price: 0,
                    features: [],
                    options: [],
                    viewsCount: 0,
                    buyCount: 0,
                    shape: 'oval',
                    pupillaryDistance: '58-72',
                    frameWidth: 138,
                    lensWidth: 50,
                    bridge: 19,
                    templeLength: 143,
                    lensHeight: 39,
                    weight: 8,
                    material: 'пластик',
                    prescriptionMin: '-20.00',
                    prescriptionMax: '12.00',
                    imageUrl: images,
                }}
                    enableReinitialize={true}
                    onSubmit={async (values, actions) => {
                        console.log('formik on submit');
                        
                        try {
                            const {data} = await instance.post('/products', values);                            
                            const id = data._id;
                            //navigate(`/product/${id}`);
                            setSuccessMsg(`успешно загружен товар с id ${id}`);
                            console.log('response of submit:');
                            console.log(data);
                        } catch (error) {
                            console.warn(error);
                            alert('ошибка при загрузке товара');
                        }
                    }}
                >

                    {({ values }) => (
                        <Form>
                            <div className={c.form}>
                                <div className={c.inputWrapper}>
                                    <label>категория
                                        <Field id='category' name='category' />
                                    </label>
                                </div>
                                <div className={c.inputWrapper}>
                                    <label>наименование
                                        <Field id='name' name='name' />
                                    </label>
                                </div>
                                <div className={c.inputWrapper}>
                                    <label>артикул
                                        <Field id='code' name='code' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>описание
                                        <Field id='description' name='description' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>цена
                                        <Field id='price' name='price' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <FieldArray name='features'>
                                        {({ insert, remove, push }) => (
                                            <div>Особенности:
                                                {values.features.length > 0 &&
                                                    values.features.map((feature, index) => (
                                                        <div key={index}>

                                                            <label>{index+1}.
                                                                <Field name={`features.${index}`} type="text" />
                                                            </label>
                                                        <button type="button" className={c.btn} onClick={() => remove(index)}>удалить</button>

                                                        </div>
                                                    ))}
                                                <button className={c.btn} type="button" onClick={() => push('')}>добавить поле</button>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                <div className={c.inputWrapper}>
                                    <FieldArray name='options'>
                                        {({ insert, remove, push }) => (
                                            <div>Опции:
                                                {values.options.length > 0 &&
                                                    values.options.map((feature, index) => (
                                                        <div key={index}>

                                                            <label>{index+1}.
                                                                <Field name={`options.${index}`} type="text" />
                                                            </label>
                                                        <button type="button" className={c.btn} onClick={() => remove(index)}>удалить</button>

                                                        </div>
                                                    ))}
                                                <button className={c.btn} type="button" onClick={() => push('')}>добавить поле</button>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>количество просмотров
                                        <Field type='number' name='viewsCount' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>количество покупок
                                        <Field type='number' name='buyCount' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>форма
                                        <Field name='shape' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>расстояние между зрачками
                                        <Field name='pupillaryDistance' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>ширина оправы, мм
                                        <Field type='number' name='frameWidth' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>ширина линзы, мм
                                        <Field type='number' name='lensWidth' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>ширина переносицы, мм
                                        <Field type='number' name='bridge' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>длина дужки, мм
                                        <Field type='number' name='templeLength' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>высота линзы, мм
                                        <Field type='number' name='lensHeight' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>вес, грамм
                                        <Field type='number' name='weight' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>материал
                                        <Field type='text' name='material' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>минимальные диоптрии
                                        <Field type='text' name='prescriptionMin' />
                                    </label>
                                </div>

                                <div className={c.inputWrapper}>
                                    <label>максимальные диоптрии
                                        <Field type='text' name='prescriptionMax' />
                                    </label>
                                </div>

                                <button type='submit'>отправить на сервер</button>
                            </div>
                        </Form>
                    )}

                </Formik>
                {successmsg && <h3>{successmsg}</h3> }
            </div>

            <FilesDownloader images={images} setImages={setImages} />
        </div>


    </>
}