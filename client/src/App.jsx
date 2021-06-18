import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, PageNotFound } from './Containers';
import { NavBar } from './Components';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
