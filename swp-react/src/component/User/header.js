import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ user }, {courses}) {
  const loggedIn = user != null; // Check if a user is logged in
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLogout = () => {
    // Clear the user session (implement your logout logic)
    // For example, remove the user token and redirect to the home page
    localStorage.removeItem("userToken");
    window.location.href = "/home";
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // In a real application, send a request to your server to fetch search results
    // For this example, filter the courses based on the search query.
    const filteredResults = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <header className="main-header" id="header">
      <div className="container">
        {/* Logo */}
        <div id="logo" className="pull-left">
          <h1>
            <Link to="/" className="scrollto">
              Beautiful <span>Arts</span>
            </Link>
          </h1>
        </div>

        {/* Search Bar */}
        {(user?.role === 2 || user?.role === null) && (
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
        )}

        {/* Menu */}
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {/* Course Dropdown */}
            {(user?.role === 2 || user?.role === null) && (
              <li className="menu-has-children">
                <Link to="#">Khóa học</Link>
                <ul>
                  <li>
                    <Link to="/courseList">Toàn bộ khóa học</Link>
                  </li>
                  <li>
                    <Link to="/courseList/createDate">Khóa học mới</Link>
                  </li>
                  <li>
                    <Link to="/courseList/price===0">Khóa học miễn phí</Link>
                  </li>
                  {user?.role === 2 && (
                    <li>
                      <Link to="/myCourse">Khóa học của tôi</Link>
                    </li>
                  )}
                </ul>
              </li>
            )}
            {/* End Course Dropdown */}

            <li>
              <Link to="#">Trợ giúp</Link>
            </li>
            <li>
              <Link to="#">Liên hệ</Link>
            </li>

            {/* User Actions (Login, Register, User Dropdown) */}
            {loggedIn ? (
              <li className="menu-has-children">
                <Link to="#">{user.username}</Link>
                <ul>
                  <li>
                    <Link to="/profile">Tài khoản của tôi</Link>
                  </li>
                  {user.role === 2 && (
                    <li>
                      <Link to="/cart">Giỏ hàng</Link>
                    </li>
                  )}
                  <li>
                    <button onClick={handleLogout}>Đăng xuất</button>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <button onClick={handleRedirect}>Đăng nhập</button>
                <button onClick={() => navigate("/register")}>Đăng ký</button>
              </li>
            )}
            {/* End User Actions */}
          </ul>
        </nav>
        {/* End Menu */}
      </div>
    </header>
  );
}

export default Header;
