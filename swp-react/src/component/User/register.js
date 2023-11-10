import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/UserApi";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Simulate a successful registration
    // You can add your registration logic here
    const registrationResult = registerUser(name, email, password); // Call the registerUser function

    if (registrationResult.success) {
      // Registration successful, handle it accordingly
      navigate("/home"); // You can replace '/' with the desired URL
    } else {
      // Registration failed, handle it accordingly
      alert(registrationResult.message);
    }
  };

  return (
    <div className="register-controller">
      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
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
      <input
        type="password"
        name="password-confirm"
        placeholder="Xác nhận mật khẩu"
      />
      <button type="submit" onClick={handleRegister}>
        Đăng ký
      </button>
    </div>
  );
}

export default Register;