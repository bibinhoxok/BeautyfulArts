import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Simulate a successful login
    setLoggedIn(true);

    // Redirect to the home page (Header) after a successful login
    history.push('/');
  };

  return (
    <div className="login-form">
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
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="Password" placeholder="Mật khẩu" />
      <button type="submit" onClick={handleLogin}>
        Đăng nhập
      </button>
      <Link to="https://www.google.com/">Đăng ký</Link>
    </div>
  );
}

export default Login;
