// == Import npm
import React from 'react';

import Header from './Header';
import Search from './Search';
import News from './News';

// == Import
import './styles.scss';

// == Composant
const Home = () => (
  <main className="home-main">
    <Header />
    <Search />
    <News />
  </main>
);

// == Export
export default Home;
