import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/UserApi';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }

    try {
      const userData = await loginUser(email, password);

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
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle any API call errors
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='login-controller'>
      <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
