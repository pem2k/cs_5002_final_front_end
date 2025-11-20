import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className = "navbar navbar-dark bg-dark">
      <div className = "container justify-content-center">
        <ul className = "navbar-nav d-flex flex-row">
          <li className="nav-item mx-3"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item mx-3"><Link to="/Inverse" className="nav-link">Inverse</Link></li>
          <li className="nav-item mx-3"><Link to="/Cipher" className="nav-link">Cipher</Link></li>
        </ul>
      </div>
    </nav>
  );
}