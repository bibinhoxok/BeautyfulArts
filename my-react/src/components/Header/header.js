import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Login from '../Login/login';
// import Register from '../Register/register';
// import { Routes, Route } from 'react-router-dom';

function Header() {
  // Define loggedIn, username, and handleLogout based on your application's logic.
  const loggedIn = true; // Example: true if the user is logged in
  const { username } = useParams(); // Example: the logged-in user's username
  // Sample course data - you can fetch this from your backend
  const [courses, setCourses] = useState([]);
  


  // State to manage the search input and results
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle logout
  const handleLogout = () => {
    // Clear the user session (you'll need to implement this logic based on your authentication mechanism)
    // For example, if you are using localStorage:
    localStorage.removeItem('userToken'); // Clear the user token

    // Redirect the user to the home page
    window.location.href ='/banner';
  };

  // Function to handle the search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // In a real application, you'd typically send a request to your server to fetch search results here.
    // For this example, we'll just filter the courses based on the search query.
    const filteredResults = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <header className="main-header" id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <h1>
            <Link to="/baner" className="scrollto">
              Beautyful <span>Arts</span>
            </Link>
          </h1>
        </div>

        {/* Search  */}
        <div className="nav-menu-search">
          <div className="input-group search-input-group" id="menu-search">
            <input
              type="text"
              placeholder="Tên khoá học, chủ đề, tác giả"
              className="search-input form-control"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="button" className="search-button">
              <i className="fa fa-search"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        {/* end search  */}

        {/* Menu  */}
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {/* Course */}
            <li className="menu-has-children">
              <Link to="#">Khóa học</Link>
              <ul>
                <li>
                  <Link to="/courseList">Toàn bộ khóa học</Link>
                </li>
                <li>
                  <Link to="/courseList">Khóa học mới</Link>
                </li>
                <li>
                  <Link to="/courseList">Khóa học miễn phí</Link>
                </li>
              </ul>
            </li>
            {/* end course */}

            <li>
              <Link to="#">Trợ giúp</Link>
            </li>
            <li>
              <Link to="#">Liên hệ</Link>
            </li>

            {/* Un,Lin,Rter */}
            {loggedIn ? (
              <>
                <li>
                  <Link to="/login" className="btn-sign-up">
                    Đăng kí
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="btn-log-in">
                    Đăng nhập
                  </Link>
                </li>
              </>
            ) : (
              <li className="menu-has-children">
                <Link to="#">{username}</Link>
                <ul>
                  <li>
                    <Link to="/myCourse">Khoá học của tôi</Link>
                  </li>
                  {/* <li>
                    <Link to="#">Chứng nhận của tôi</Link>
                  </li> */}
                  <li>
                    <Link to="/cart">Giỏ hàng</Link>
                  </li>
                  <li>
                  <button onClick={handleLogout}>Đăng xuất</button>
                  </li>
                </ul>
              </li>
            )}
            {/* Un,Lin,Rter */}
          </ul>
        </nav>
        {/* end menu  */}
      </div>
    </header>
  );
}

export default Header;
