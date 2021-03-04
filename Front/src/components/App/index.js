// == Import npm
import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/components/Home';
import UserProfile from 'src/containers/UserProfile';
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
      <Route path="/profil/:pseudo/:id" exact>
        <UserProfile />
      </Route>
      <Route path="/login" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
