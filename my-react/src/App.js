// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/footer";
import Header from './components/Header/header';
import Home from './components/Home/baner';
// import Login from './components/Login/login';
// import Register from './components/Register/register';
import CourseList from './components/Course/courseList';
import CourseDetail from './components/Course/courseDetail';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <CourseList/>
      <CourseDetail/>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/login' element={Login} />
      <Route path='/register' element={Register} /> */}
      <Route path='/course' element={<CourseList/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
  
}

export default App;
