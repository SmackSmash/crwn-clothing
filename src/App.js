import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import Hats from './pages/about/About';

const App = props => (
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/hats">Hats</Link>
    <Route path="/" exact component={Homepage} />
    <Route path="/hats" component={Hats} />
  </BrowserRouter>
);

export default App;
