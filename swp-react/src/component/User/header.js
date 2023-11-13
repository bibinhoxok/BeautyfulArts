import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCourseByName } from '../api/CourseApi';
import { useUser } from './Context';

function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Đăng xuất thành công!');
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const results = await getCourseByName(searchQuery);
      navigate('/courseList', { state: { searchResults: results } });
    } catch (error) {
      console.error('Error searching courses by name:', error);
      // Handle error or show a message to the user
    }
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
        <div className="nav-menu-search">
          <div className="input-group search-input-group" id="menu-search">
            <input
              type="text"
              placeholder="Tên khoá học, chủ đề, tác giả"
              className="search-input form-control"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="button" className="search-button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {user?.role === 3 && <li><Link to="/courseManagement">Quản lý khóa học</Link></li>}
            {(user?.role === 1 || user?.role === 4) && (
              <>
                <li><Link to="/accountManagement">Quản lý tài khoản</Link></li>
                <li><Link to="/postManagement">Quản lý bài viết</Link></li>
                <li><Link to="/courseManagement">Quản lý khóa học</Link></li>
              </>
            )}
            {(user?.role === 2 || user?.role === null) && (
              <li className="menu-has-children">
                <Link to="#">Khóa học</Link>
                <ul>
                  <li><Link to="/courseList">Toàn bộ khóa học</Link></li>
                  <li><Link to="/courseList/createDate">Khóa học mới</Link></li>
                  <li><Link to="/courseList/price=0">Khóa học miễn phí</Link></li>
                  {user?.role === 2 && <li><Link to="/myCourse">Khóa học của tôi</Link></li>}
                </ul>
              </li>
            )}
            <li><Link to="#">Trợ giúp</Link></li>
            <li><Link to="#">Liên hệ</Link></li>

            {user && user.auth === true ? (
              <li className="menu-has-children">
                <Link to="#">{user.username}</Link>
                <ul>
                  <li><Link to="/profile">Tài khoản của tôi</Link></li>
                  {user.role === 2 && <li><Link to="/cart">Giỏ hàng</Link></li>}
                  <li><button onClick={handleLogout}>Đăng xuất</button></li>
                </ul>
              </li>
            ) : (
              <>
                <li><button className='btn-sign-up' onClick={() => navigate("/login")}>Đăng nhập</button></li>
                <li><button className='btn-log-in' onClick={() => navigate("/register")}>Đăng ký</button></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
