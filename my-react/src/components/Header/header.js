import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Define loggedIn, username, and handleLogout based on your application's logic.
  const loggedIn = true; // Example: true if the user is logged in
  const username = "User123"; // Example: the logged-in user's username
  // Sample course data - you can fetch this from your backend
  const courses = [
    {
      id: 1,
      name: "Course 1",
      instructor: "Instructor 1",
      price: "$49.99",
      createDate: "2023-10-15",
      enrolled: true, // Example: User is enrolled
      image: "course1.jpg",
    },
    {
      id: 2,
      name: "Course 2",
      instructor: "Instructor 2",
      price: "$59.99",
      createDate: "2023-10-20",
      enrolled: false, // Example: User is not enrolled
      image: "course2.jpg",
    },
    // Add more course data here
  ];

  // State to manage the search input and results
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle logout
  const handleLogout = () => {
    // Your logout logic here
    // You might clear user session, state, or perform API requests.
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
    <header className="main-header">
      <div className="container">
        <div id="logo" className="pull-left">
          <h1>
            <Link to="#body" className="scrollto">
              Beautyful <span>Arts</span>
            </Link>
          </h1>
        </div>

        {/* Search  */}
        <div className="nav-menu-search">
          <div id="input-group search-input-group" className="menu-search">
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
        <nav className="nav-menu-container">
          <ul className="nav-menu">

          {/* Course */}
            <li className="menu-has-children">
              <Link to="#">Khóa học</Link>
              <ul>
                <li>
                  <Link to="#">Toàn bộ khóa học</Link>
                </li>
                <li>
                  <Link to="#">Khóa học theo chủ đề</Link>
                </li>
                <li>
                  <Link to="#">Khóa học mới</Link>
                </li>
                <li>
                  <Link to="#">Khóa học miễn phí</Link>
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
              <div>
                <li className="menu-has-children">
                  <Link to="#" className="btn-sign-in">
                    {username}
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Khoá học của tôi</Link>
                    </li>
                    <li>
                      <Link to="#">Chứng nhận của tôi</Link>
                    </li>
                    <li>
                      <Link to="#">Giỏ hàng</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={handleLogout}>
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/Register" className="btn-sign-up">
                    Đăng kí
                  </Link>
                </li>
                <li>
                  <Link to="/Login" className="btn-log-in">
                    Đăng nhập
                  </Link>
                </li>
              </div>
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
