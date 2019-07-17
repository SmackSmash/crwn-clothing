import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = props => {
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        console.log(currentUser.id);
      } else {
        setUser({});
        console.log(currentUser.id);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser.id]);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Route path="/" exact component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignInSignUp} />
    </BrowserRouter>
  );
};

export default App;
