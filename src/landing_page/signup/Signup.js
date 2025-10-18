import React, { useState } from "react";
import axios from "../../utils/axios.js"; // axiosInstance with withCredentials
import { useNavigate } from "react-router-dom";
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/signup", formData); // /user from backend route
      setFormData({ username: "", email: "", password: "" }); // Clear form
      const dashboardURL =
      window.location.hostname === "localhost"
        ? "http://localhost:3001"
        : "https://stock-sense-dashboard.vercel.app";

      window.location.replace(dashboardURL);// dashboard
    } catch (err) {
      console.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign Up</h2>
        <p className="sub-heading">To access the StockSense Dashboard</p>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default Signup;
