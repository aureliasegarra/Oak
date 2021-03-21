// == Import npm
import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/containers/Home';
import Menu from 'src/containers/Menu';
import Search from 'src/containers/Search';
import Results from 'src/containers/Results';
import UserProfile from 'src/containers/UserProfile';
import ListDetails from 'src/containers/ListDetails';
import BookDetails from 'src/containers/BookDetails';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';
import Login from 'src/containers/Auth/Login';
import Register from 'src/containers/Auth/Register';
import Team from 'src/components/Team';

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
      <Route path="/book/:id" exact>
        <BookDetails />
      </Route>
      <Route path="/profil/:pseudo/:id" exact>
        <UserProfile />
      </Route>
      <Route path="/list/:id" exact>
        <ListDetails />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/search" exact>
        <Search />
        <Results />
      </Route>
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
