import React from "react";
import { Link, useParams } from "react-router-dom";

function Header() {
  const { username } = useParams();

  // Function to handle logout
  const handleLogout = () => {
    // Your logout logic here
    // You might clear user session, state, or perform API requests.
  };

  return (
    <>
      <header className="main-header" id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <Link to="#body" className="scrollto">
                Beautyful <span>Arts</span>
              </Link>
            </h1>
          </div>

          {/* Menu  */}
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <Link to="#">Trợ giúp</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>

              {/* Username  */}
              <li className="menu-has-children">
                <Link to="#">{username}</Link>
                <ul>
                  <li>
                    <Link to="#">Tài khoản của tôi</Link>H
                  </li>
                  <li>
                    <Link to="#" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              </li>
              {/* End Username  */}
            </ul>
          </nav>
          {/* end menu  */}
        </div>
      </header>
    </>
  );
}

export default Header;
