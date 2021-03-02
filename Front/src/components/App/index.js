// == Import npm
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';

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
    </Switch>
  </div>
);

// == Export
export default App;
