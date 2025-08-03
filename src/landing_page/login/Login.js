import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import '../signup/Signup.css';


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", formData);
      setFormData({ username: "", password: "" }); // Clear form
      window.location.replace("http://localhost:3001"); // dashboard
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
        <h2>Log In</h2>
        <p className="sub-heading">Welcome back to the StockSense Dashboard</p>

        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Log In</button>
        </form>
    </div>

  );
};

export default Login;
