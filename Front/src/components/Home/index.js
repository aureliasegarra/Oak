// == Import npm
import React from 'react';

import Page from 'src/components/Page';
import Header from './Header';
import Search from './Search';
import News from './News';

// == Import
import './styles.scss';

// == Composant
const Home = () => (
  <Page>
    <Header />
    <Search />
    <News />
  </Page>
);

// == Export
export default Home;
