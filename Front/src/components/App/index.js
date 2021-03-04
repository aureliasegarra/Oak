// == Import npm
import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Login from 'src/components/Login';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Login" exact>
        <Login />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
