
import React from "react";
import "../css/login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h2>Welcome Back!</h2>
        <p>Login to your Shopsy account</p>

        <form>
          <div className="formGroup">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signupText">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
