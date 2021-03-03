// == Import npm
import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

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
    <Footer />
  </div>
);

// == Export
export default App;
