import React from 'react';

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => setCurrentPage('menu')}>Menu</button></li>
        <li><button onClick={() => setCurrentPage('games')}>3D/Games</button></li>
        <li><button onClick={() => setCurrentPage('videos')}>Videos</button></li>
        <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
