import c from './App.module.css';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage';
import { Women } from './Components/Women/Women';
import { Men } from './Components/Men/Men';
import { Children } from './Components/Children/Children';
import { Brands } from './Components/Brands/Brands';
import { LoginPage } from './Components/Header/LoginPage/LoginPage';
import { ProductPage } from './Components/common/ProductPage/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/authSlice';
import { Administration } from './Components/MainPage/Administration/Administration';


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return <>
    <Header />
    <div className={c.appWrapper}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/children' element={<Children />} />
        <Route path='/brands/:slug' element={<Brands />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductPage />} />

        { isAuth &&
          <Route path='/manage' element={<Administration />} />
        }

      </Routes>
    </div>
    <Footer />
  </>;
}

export default App;
