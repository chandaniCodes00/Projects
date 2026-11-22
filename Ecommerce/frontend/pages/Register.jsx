
import React from "react";
import "../css/register.css";

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerBox">
        <h2>Create Account</h2>
        <p>Join Shopsy and start shopping!</p>

        <form>
          <div className="registerGroup">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="registerGroup">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="registerGroup">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="registerGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="registerGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="loginText">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
