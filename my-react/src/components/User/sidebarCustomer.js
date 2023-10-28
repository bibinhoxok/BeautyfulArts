import React from "react";
import { Link, useParams } from "react-router-dom";

function Sidebar() {
  const [user] = useParams();

  return (
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
          {/* User */}
          <li>
            <Link to="/myCourse">Khoá học của tôi</Link>
          </li>
          {/* <li>
                    <Link to="#">Chứng nhận của tôi</Link>
                  </li> */}
          <li>
            <Link to="/cart">Giỏ hàng</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
