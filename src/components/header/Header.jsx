import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/userSelectors';
import { selectCartHidden } from '../../selectors/cartSelectors';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import * as S from './Header.styled';

const Header = ({ currentUser, hidden }) => {
  return (
    <S.Header>
      <S.LogoContainer to="/">
        <Logo className="logo" />
      </S.LogoContainer>
      <S.Options>
        <S.OptionNavLink to="/" exact>
          Home
        </S.OptionNavLink>
        <S.OptionNavLink to="/shop">Shop</S.OptionNavLink>
        {currentUser.id ? (
          <S.OptionNavLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </S.OptionNavLink>
        ) : (
          <S.OptionNavLink to="/signin" activeClassName="active">
            Sign In
          </S.OptionNavLink>
        )}
        <CartIcon />
      </S.Options>
      {!hidden && <CartDropdown />}
    </S.Header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
