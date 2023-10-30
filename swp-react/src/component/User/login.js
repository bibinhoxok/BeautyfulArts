import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { loginUser } from '../api/UserApi';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    const userData = loginUser(username, password);

    if (userData) {
      // Redirect based on user's role or other criteria
      if (userData.role === 2) {
        navigate(`/home/${userData.username}`);
      } else if (userData.role === 3) {
        navigate(`/courseManagement/${userData.username}`);
      } else if (userData.role === 1 || userData.role === 4) {
        navigate(`/websiteManagement/${userData.username}`);
      }
    } else {
      // Handle login failure
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='login-controller'>
     {/* <div className="login" style={{display: selected ? 'none':'block'}}> */}
     <input type="text" name="username" placeholder="Tên đăng nhập" value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="Mật khẩu" value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Đăng nhập</button>
      <button onClick={() => navigate("/register")}>Đăng ký</button>
    </div>
  );
}

export default Login;
