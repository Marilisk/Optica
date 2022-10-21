import c from './App.module.css';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { router } from './router';
import { MainPage } from './Components/MainPage/MainPage';
import { Women } from './Components/Women/Women';
import { Men } from './Components/Men/Men';
import { Children } from './Components/Children/Children';
import { Brands } from './Components/Brands/Brands';


function App() {
  return <>
    <Header />
    <div className={c.appWrapper}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/children' element={<Children />} />
        <Route path='/brands/:slug' element={<Brands />} />
      </Routes>
    </div>
    <Footer />
  </>;
}

export default App;
