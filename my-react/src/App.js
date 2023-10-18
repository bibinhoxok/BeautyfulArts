import { Routes, Route } from 'react-router-dom';
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
import InstructorHeader from './components/Header/hearderInstructor';
import DefaultHeader from './components/Header/header';

function App() {
  // Simulate user data with role information (1 for customer, 2 for instructor, 3 for staff, 4 for admin)
  const user = { role: null }; // Change the role as needed
  

  return (
    <BrowserRouter>
      {/* Header */}
      {user.role === 2 ? (
        <Header />
      ) : user.role === 1 || user.role === 3 || user.role === 4  ? (
        <InstructorHeader />
      ) : (
        <DefaultHeader /> // Render a default header when the user doesn't have a role
      )}
      {/* End header */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Customer routes */}
        {user.role === 2 ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/courseDetail" element={<CourseDetail />} />
          </>
        ) : null}
         {/* End customer routes */}

        {/* Instructor routes */}
        {user.role === 3 ? (
          <>
            <Route path="/courseManagement" element={<CourseManagement />} />
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/courseDetail" element={<CourseDetail />} />
            <Route path="/createCourse" element={<CreateCourse />} />
          </>
        ) : null}
        {/* End Instructor routes */}
        {/* Staff routes */}
        {user.role === 1 || user.role === 4 ? (
          <>
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/courseDetail" element={<CourseDetail />} />
          </>
        ) : null}
        {/* End Staff routes */}
      </Routes>
      {/* End routes */}

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
