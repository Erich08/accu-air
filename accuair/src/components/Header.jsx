import React from 'react';

function Header() {
  return (
    <header>
      <div className='logo--wrapper'>
        <div className='logo--container'>
          <img src='/accuair-logo.png' alt='accuair logo' className='logo' />
          <h1 className='company--info'>Heating and Cooling Service Company</h1>
        </div>
        <div className='links--wrapper'>
          <ul className='links'>
            <li>Request a quote</li>
            <li>Book Service</li>
            <li>Call us Now</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
