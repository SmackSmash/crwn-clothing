import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

const App = props => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={Homepage} />
    <Route path="/shop" component={Shop} />
  </BrowserRouter>
);

export default App;
