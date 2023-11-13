import React, { useState } from 'react';
import { loginUser } from '../api/UserApi';
import { toast } from 'react-toastify';
import { useUser } from './Context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { loginContext, setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        toast.error('Email and password are required.');
        return;
      }

      const userData = await loginUser(email, password);

      if (userData && userData.token) {
        loginContext(email, userData.token);
        setUser(userData);
        navigate('/home');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='login-controller'>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;
