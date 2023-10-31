import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { loginUser } from '../api/UserApi';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [username] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    // Simulate a successful login
    const userData = loginUser(username, password);

    if (userData) {
      // Redirect based on user's role or other criteria
      if (userData.role === 2) {
        navigate(`/home/${userData.username}`);
      } else if (userData.role === 3) {
        navigate(`/courseManagement/${userData.username}`);
      } else if (userData.role === 1 || userData.role === 4) {
        navigate(`/accountManagement/${userData.username}`);
      }
    } else {
      // Handle login failure
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='login-controller'>
     {/* <div className="login" style={{display: selected ? 'none':'block'}}> */}
     {/* <input type="text" name="username" placeholder="Tên đăng nhập" value={username}
        onChange={(e) => setUsername(e.target.value)} /> */}
        <input type="text" name="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Mật khẩu" value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
