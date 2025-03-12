import React from 'react';
import '../styles/style.css';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <p>&copy;{new Date().getFullYear()} Your website name</p>
      </footer>
    </div>
  );
}

export default Footer;
