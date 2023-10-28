import React from "react";
import { Link, useParams } from "react-router-dom";

function Nav() {
  const [user] = useParams();

  return (
    <nav>
      <div className="col-12 col-md-3">
        <div className="image">
          <img src={user.image} width="100%" height="100%" alt="" />
        </div>
        <div id="sidebar">
          <header>
            <Link to="/profile">{user.username}</Link>
          </header>
          <ul className="nav">
            <li className="sidebar-list-item active">
              <Link to="/profile">Thông tin tài khoản</Link>
            </li>
            {/* Intructor  */}
            <li>
              <Link to="/courseManagement">Quản lí khóa học</Link>
            </li>
            <li>
              <Link to="/createCourse">Đăng khóa học</Link>
            </li>
            {/* Staff  */}
            
            {/* Admin  */}
            {/* User */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
