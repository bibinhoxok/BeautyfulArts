import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider, useUser } from './component/User/Context';
import Header from './component/User/header';
import Footer from './component/User/footer';
import Home from './component/User/home';
import Login from './component/User/login';
import Register from './component/User/register';
import CourseManagement from './component/Instructor/courseManagement';
import AccountManagement from './component/Employee/accountManagement';
import CourseList from './component/User/courseList';
import CourseDetail from './component/User/courseDetail';
import MyCourse from './component/Customer/myCourse';
import Learning from './component/Customer/learningCourse';
import UpdateCourse from './component/Instructor/updateCourse';

function App() {
  // Note: useUser is a function, so you need to invoke it.
  const { user } = useUser();
  console.log(">>> user: ",user);

  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courseManagement" element={<CourseManagement />} />
          <Route path="/accountManagement" element={<AccountManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courseList/:searchResults" element={<CourseList />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/myCourse" element={<MyCourse />} />
          <Route path="/learning" element={<Learning />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/updateCourse" element={<UpdateCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
    </div>
  );
}

export default App;
