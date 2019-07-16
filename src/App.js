import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

const App = props => (
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Route path="/" exact component={Homepage} />
    <Route path="/shop" component={Shop} />
  </BrowserRouter>
);

export default App;
