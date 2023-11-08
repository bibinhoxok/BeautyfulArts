import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/User/header";
import Footer from "./component/User/footer";
import Home from "./component/User/home";
import CourseManagement from "./component/Instructor/courseManagement";
import AccountManagement from "./component/Employee/accountManagement";
import CourseList from "./component/User/courseList";
import CourseDetail from "./component/User/courseDetail";
import MyCourse from "./component/Customer/myCourse";
import Learning from "./component/Customer/learningCourse";
import Cart from "./component/Customer/cart";
import Order from "./component/Customer/orderDetail";
import UpdateCourse from "./component/Instructor/updateCourse";

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
          <Route path="/courseList" element={<CourseList/>} />
          <Route path="/courseDetail" element={<CourseDetail/>} />
          <Route path="/myCourse" element={<MyCourse/>} />
          <Route path="/learning" element={<Learning/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/updateCourse" element={<UpdateCourse/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
