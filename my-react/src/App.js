import { Routes, Route, useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/baner';
import Login from './components/Login/login';
import Register from './components/Register/register';
import CourseList from './components/Course/courseList';
import CourseDetail from './components/Course/courseDetail';
import CreateCourse from './components/Course/createCourse';
import CourseManagement from './components/Course/courseManagement';
import EmployeeHeader from './components/Header/headerEmployee';

function App() {
  // Simulate user data with role information (1 for customer, 2 for instructor, 3 for staff, 4 for admin)
  const user = { role: 2 }; // Change the role as needed

  // Define a navigate function
  const navigate = useNavigate();

  // Define routes for different roles
  const customerRoutes = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </>
  );

  const employeeRoutes = (
    <>
      <EmployeeHeader />
      <Routes>
        <Route path="/courseManagement" element={<CourseManagement />} />
      </Routes>
      <Footer />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        {user.role === 1 && customerRoutes}
        {user.role >= 2 && employeeRoutes}
        {/* Add more roles as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
