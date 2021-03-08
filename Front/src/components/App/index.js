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
import BookDetails from 'src/containers/BookDetails';
import Error from 'src/components/Home/Error';

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
      <Route path="/results" exact>
        <Search />
        <Results />
      </Route>
      <Route path="/result/:id" exact>
        <BookDetails />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
