// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar({ cartCount, toggleCart }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <li class="logo-mini">
        <img src='/imagenes/Mangas/tomo2.jpg' alt="Mini Logo" />
      </li>
      <span className="navbar-brand">Slam Dunk Store</span>
      <button className="btn btn-outline-light position-relative" onClick={toggleCart}>
        🛒
        <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;

