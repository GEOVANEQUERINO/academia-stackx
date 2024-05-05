// Header.js
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Minha SPA</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
