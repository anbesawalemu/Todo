import React from 'react';
import '../styles/style.css';

function Header() {
  return (
    <header className='header'>
      <h1>my website</h1>
      <nav >
        <ul>
            <li > <a href="#"> Home</a></li>
            <li>  <a href="about">About</a>    </li>
            <li> <a href="service">Service</a> </li>
            <li>  <a href="contact">Contact</a>  </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
