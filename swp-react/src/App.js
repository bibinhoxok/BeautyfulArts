import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Header from "./component/User/header";
import Footer from "./component/User/footer";
import Home from "./component/User/home";
// import CourseManagement from "./component/Instructor/courseManagement";
// import AccountManagement from "./component/Employee/accountManagement";
import Login from "./component/User/login";
import Register from "./component/User/register";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer></ToastContainer> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
