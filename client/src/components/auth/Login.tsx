import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // TODO: Implement actual login logic here
      console.log("Login attempt with:", formData);
      navigate("/");
      // navigate('/dashboard');
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Disaster Relief System</h1>
          <h2>Welcome Back</h2>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="login-button">
              Sign In
            </button>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="register-link">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
