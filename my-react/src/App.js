// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/footer";
import Header from './components/Header/header';
import Home from './components/Home/baner';
// import Header from "./components/Header/header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
  
}

export default App;
