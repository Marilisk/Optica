import c from './App.module.scss';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage';
import { Women } from './Components/Women/Women';
import { Men } from './Components/Men/Men';
import { Children } from './Components/Children/Children';
import { Lenses } from './Components/Lenses/Lenses';
import { LoginPage } from './Components/Header/LoginPage/LoginPage';
import { ProductPage } from './Components/common/ProductPage/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { checkAuth, fetchAddToFavorites, fetchRemoveFromFavorites, selectIsAuth, selectIsManager } from './redux/authSlice';
import { Administration } from './Components/MainPage/EyewearAdministration/Administration';
import { fetchProducts } from './redux/productsSlice';
import { Modal } from './Components/common/Modal/Modal';
import { setfullHeaderTheme } from './redux/headerSlice';
import { fetchFilterOptions } from './redux/featuresSlice';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { LensesAdministration } from './Components/MainPage/LensesAdministration/LensesAdministration';
import { OfflineShop } from './Components/OfflineShop/OfflineShop';


function App() {
  const dispatch = useDispatch();
  const isManager = useSelector(selectIsManager);
  const isAuth = useSelector(selectIsAuth);
  const fullHeader = useSelector(state => state.header.fullHeader);

  const [modal, switchModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts ());
    if (localStorage.getItem('token')) {
      dispatch(checkAuth()); 
    }
    dispatch(setfullHeaderTheme(true));
    dispatch(fetchFilterOptions('features'));
    dispatch(fetchFilterOptions('color'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setfullHeaderTheme(true));
  }, [isAuth]);


  //const userId = useSelector(s => s.auth.loginData.data);
  //console.log(userId)
  const userFavorites = useSelector(state => state.auth.loginData.data?.favourites);
  //console.log(userFavorites)
  let favoritesCount = userFavorites ? userFavorites.length : null;
  const authIsLoading = useSelector(state => state.auth.loginData.status);


  const addToFavorites = (productId) => {
    if (!isAuth) {
      switchModal(true)
    } else {
      //console.log('in App add to fav' + productId)
      dispatch(fetchAddToFavorites(productId))
    }
  }
  const removeFromFavorites = (productId) => {
    dispatch(fetchRemoveFromFavorites(productId))
  }

  
  return <>
    {modal && <Modal switchModal={switchModal} />}
    <Header fullHeader={fullHeader} favoritesCount={favoritesCount} />
    <div className={c.appWrapper}>
      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/women' element={<Women addToFavorites={addToFavorites} 
                                              removeFromFavorites={removeFromFavorites}
                                              userFavorites={userFavorites}
                                              authIsLoading={authIsLoading} />} />
        <Route path='/men' element={<Men addToFavorites={addToFavorites} 
                                              removeFromFavorites={removeFromFavorites}
                                              userFavorites={userFavorites}
                                              authIsLoading={authIsLoading} />} />
        <Route path='/children' element={<Children />} />
        <Route path='/lenses' element={<Lenses authIsLoading={authIsLoading} />} />
        <Route path='/login' element={<LoginPage isLoading={authIsLoading} />} />
        <Route path='/product/:id' element={<ProductPage addToFavorites={addToFavorites} 
                                                          removeFromFavorites={removeFromFavorites}
                                                          userFavorites={userFavorites}
                                                          isLoading={authIsLoading} />} />
        <Route path='/offlineshop' element={<OfflineShop />} />

        <Route path='/search' element={<SearchPage />} />

        { isManager && <Route path='/manage' element={<Administration />} /> }
        { isManager && <Route path='/manage/:id' element={<Administration />} /> }

        { isManager && <Route path='/managelenses' element={<LensesAdministration  />} /> }
        { isManager && <Route path='/managelenses/:id' element={<LensesAdministration />} /> }

      </Routes>

    </div>
    <Footer />

    {/* <CookieModal /> */}
  </>;
}

export default App;
