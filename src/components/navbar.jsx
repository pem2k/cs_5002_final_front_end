import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Inverse">Inverse</Link></li>
        <li><Link to="/Ciper">Cipher</Link></li>
      </ul>
    </nav>
  );
}