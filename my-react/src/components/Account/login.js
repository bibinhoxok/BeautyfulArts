import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = { role: null };
  const [selected, setSelected] = useState(true); // Define and initialize the selected state

  const handleLogin = () => {
    // Simulate a successful login
    setLoggedIn(true);

    // Redirect to another page after a successful login
    let username = 'your-username'; // Replace with the actual username
    if (user.role === 2) {
      window.location.href = `/baner/${username}`;
    } else if (user.role === 3) {
      window.location.href = `/courseManagement/${username}`;
    } else if (user.role === 1 || user.role === 4) {
      window.location.href = `/websiteManagement/${username}`;
    }
  };

  return (
    <div className="login-form" style={{display: selected ? 'none':'block'}}>
      <Link to="#" className="close-form">
        x
      </Link>
      <div id="logo">
        <h1>
          <Link to="#body" className="scrollto">
            Beautyful <span>Arts</span>
          </Link>
        </h1>
      </div>
      <input type="text" name="username" placeholder="Tên đăng nhập" />
      <input type="password" name="Password" placeholder="Mật khẩu" />
      <button type="submit" onClick={handleLogin}>
        Đăng nhập
      </button>
      <Link to="/register">Đăng ký</Link>
    </div>
  );
}

export default Login;
