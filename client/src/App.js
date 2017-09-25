import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Menu from './components/Food';

const App = () => (

  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/menus/:id" component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
