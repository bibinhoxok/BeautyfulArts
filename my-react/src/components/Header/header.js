import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define loggedIn, username, and handleLogout based on your application's logic.
  const loggedIn = true; // Example: true if the user is logged in
  const username = 'User123'; // Example: the logged-in user's username

  // Function to handle logout
  const handleLogout = () => {
    // Your logout logic here
    // You might clear user session, state, or perform API requests.
  };

  return (
    <header className='main-header'>
      <div className='container'>
        <div id="logo" className="pull-left">
          <h1>
            <Link to="#body" className="scrollto">
              Beautyful <span>Arts</span>
            </Link>
          </h1>
        </div>
        <div className="nav-menu-search">
          <div id="input-group search-input-group" className="menu-search">
            <input
              type="text"
              placeholder="Tên khoá học, chủ đề, tác giả"
              className="search-input form-control"
            />
            <button type="button" className="search-button">
              <i className="fa fa-search"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <nav className="nav-menu-container">
          <ul className="nav-menu">
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
            <li>
              <Link to="#">Trợ giúp</Link>
            </li>
            <li>
              <Link to="#">Liên hệ</Link>
            </li>
            {loggedIn ? (
              <div>
                <li className="menu-has-children">
                  <Link to="#" className="btn-sign-in" >
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
                      <Link to="#" onClick={handleLogout}>Đăng xuất</Link>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;