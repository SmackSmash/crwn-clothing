import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './selectors/userSelectors';
import { setCurrentUser } from './actions';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import Checkout from './pages/checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser({});
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser, currentUser.id]);

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route
        path="/signin"
        exact
        render={() => (currentUser.id ? <Redirect to="/" /> : <SignInSignUp />)}
      />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
