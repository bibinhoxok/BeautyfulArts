import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/UserApi';

function RegisterModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const registrationResult = registerUser(name, email, password);

    if (registrationResult.success) {
      navigate('/home');
      handleClose();
    } else {
      alert(registrationResult.message);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Đăng ký
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicName">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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
          <Button variant="primary" onClick={handleRegister}>
            Đăng ký
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegisterModal;
