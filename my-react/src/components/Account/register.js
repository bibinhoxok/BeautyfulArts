import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simulate a successful registration
    // You can add your registration logic here

    // Redirect to another page after a successful login
    window.location.href = '/baner'; // You can replace '/' with the desired URL
  };

  return (
    <div className="register-form">
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
      <input type="text" name="name" placeholder="Họ và tên" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Mật khẩu" />
      <input type="password" name="password-confirm" placeholder="Xác nhận mật khẩu" />
      <button type="submit" onClick={handleRegister}>
        Đăng ký
      </button>
    </div>
  );
}

export default Register;
