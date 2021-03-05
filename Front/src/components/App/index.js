// == Import npm
import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/containers/Home';
import Results from 'src/containers/Results';
import Search from 'src/containers/Search';

// == Import
import './styles.scss';

// == Composant
const App = ({ results }) => (

  <div className="app">
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/results" exact>
        <Search />
        <Results results={results} />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
