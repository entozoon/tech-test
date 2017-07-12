import './Header.css';
import React from 'react';
import logo from './images/logo.png';

const Header = () =>
  <header className="header">
    <div className="wrapper">
      <div className="header__title">
        <h1>Sky Betting &amp; Gaming Technical Test</h1>
      </div>

      <a href="" className="header__logo">
        <img src={logo} alt="SkyBet" />
      </a>
    </div>
  </header>;

export default Header;
