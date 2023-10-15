import React from 'react';

function Header() {
    return <header className='main-header'>
        <div className='container'>

<div id="logo" className="pull-left">
        <h1>
          <a href="#body" className="scrollto">
            Beautyful <span>Arts</span>
          </a>
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
            <a href="">Khóa học</a>
            <ul>
              <li>
                <a href="#">Toàn bộ khóa học</a>
              </li>
              <li>
                <a href="#">Khóa học theo chủ đề</a>
              </li>
              <li>
                <a href="#">Khóa học mới</a>
              </li>
              <li>
                <a href="#">Khóa học miễn phí</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Trợ giúp</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <li>
            <a href="#" className="btn-sign-up">
              Đăng kí
            </a>
          </li>
          <li>
            <a href="#" className="btn-log-in">
              Đăng nhập
            </a>
          </li>
        </ul>
</nav>
</div>
    </header>;
}

export default Header;

