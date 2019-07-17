import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink to="/" className="option" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/shop" className="option" activeClassName="active">
          Shop
        </NavLink>
        <NavLink to="/contact" className="option" activeClassName="active">
          Contact
        </NavLink>
        {currentUser.id ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink to="/signin" className="option" activeClassName="active">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
