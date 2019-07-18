import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
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
        {currentUser.id ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink to="/signin" className="option" activeClassName="active">
            Sign In
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({ currentUser, hidden });

export default connect(mapStateToProps)(Header);
