import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = props => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink to="/" className="option" activeClass="active">
          Home
        </NavLink>
        <NavLink to="/shop" className="option" activeClass="active">
          Shop
        </NavLink>
        <NavLink to="/contact" className="option" activeClass="active">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
