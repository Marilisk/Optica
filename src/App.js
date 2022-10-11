import { Routes, Route } from "react-router-dom";
import c from './App.module.css';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer';

function App() {
  return <>
    <Header />
    <div className={c.appWrapper}>
      
      
    </div>
    <Footer />
    </>;
}

export default App;
