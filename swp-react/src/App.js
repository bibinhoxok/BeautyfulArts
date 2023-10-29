import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/User/header";
import Footer from "./component/User/footer";
import Home from "./component/User/home"
// import CourseManagement from "./component/Instructor/courseManagement";
// import AccountManagement from "./component/Employee/accountManagement";
import Login from "./component/User/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
