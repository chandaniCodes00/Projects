
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbarContainer">
      <div className="navbar">

        {/* Logo */}
        <Link to="/" className="logo">
          Shop<span>sy</span>
        </Link>

        {/* Navigation Links */}
        <nav className={`navLinks ${menuOpen ? "showMenu" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>

          <NavLink to="/categories" onClick={() => setMenuOpen(false)}>
            Categories
          </NavLink>
        </nav>

        {/* Search and User Actions */}
        <div className="navActions">
          <form className="searchBox" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search products..." />
            <button type="submit" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <Link to="/cart" className="navCart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
          </Link>

          <Link to="/login" className="loginBtn">
            Login
          </Link>

          <Link to="/register" className="registerBtn">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
