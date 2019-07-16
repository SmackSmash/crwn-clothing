import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';

const App = props => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={Homepage} />
    <Route path="/shop" component={Shop} />
    <Route path="/signin" component={SignInSignUp} />
  </BrowserRouter>
);

export default App;
