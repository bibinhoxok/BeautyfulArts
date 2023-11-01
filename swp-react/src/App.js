import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Header from "./component/User/header";
import Footer from "./component/User/footer";
import Home from "./component/User/home";
import CourseManagement from "./component/Instructor/courseManagement";
import AccountManagement from "./component/Employee/accountManagement";
import Login from "./component/User/login";
import Register from "./component/User/register";
import Profile from "./component/User/profile";
import CourseList from "./component/User/courseList";
import CourseDetail from "./component/User/courseDetail";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer></ToastContainer> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/courseManagement" element={<CourseManagement />} />
          <Route path="/accountManagement" element={<AccountManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/courseList" element={<CourseList/>} />
          <Route path="/courseDetail" element={<CourseDetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
