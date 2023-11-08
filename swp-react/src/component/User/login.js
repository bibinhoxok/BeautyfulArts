import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { loginUser } from '../api/UserApi';
import { toast } from 'react-toastify';
import { useUser } from './Context';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        // Save the token to local storage
        localStorage.setItem('token', userData.token);
        // Store the user data in the context
        setUser(userData);

        // Redirect based on user's role or other criteria
        switch (userData.role) {
          case 2:
            navigate('/home');
            break;
          case 3:
            navigate('/courseManagement');
            break;
          case 1:
          case 4:
            navigate('/accountManagement');
            break;
          default:
            toast.error('Invalid user role.');
        }
        handleClose(); // Đóng modal sau khi đăng nhập thành công
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
    <div>
      <Button variant="primary" onClick={handleShow}>
        Đăng nhập
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
