import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './component/User/Context';
import { CourseProvider } from './component/Customer/CourseContext';
import Header from "./component/User/header";
import Footer from "./component/User/footer";
import Home from "./component/User/home";
import CourseManagement from "./component/Instructor/courseManagement";
import AccountManagement from "./component/Employee/accountManagement";
import Login from "./component/User/login";
import Register from "./component/User/register";
import CourseList from "./component/User/courseList";
import CourseDetail from "./component/User/courseDetail";
import MyCourse from "./component/Customer/myCourse";
import Learning from "./component/Customer/learningCourse";
// import Cart from "./component/Customer/cart";
import UpdateCourse from "./component/Instructor/updateCourse";
// import { useUser } from './component/User/Context';


function App() {
  // const { user } = useUser;
  // console.log(">>> user: ",user);

  return (
    <div className="App">
    <UserProvider>
      <CourseProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courseManagement" element={<CourseManagement />} />
          <Route path="/accountManagement" element={<AccountManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/myCourse" element={<MyCourse />} />
          <Route path="/learning" element={<Learning />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/updateCourse" element={<UpdateCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CourseProvider>
    </UserProvider>
    </div>
  );
}

export default App;
