// == Import npm
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Page from 'src/components/Page';

// == Import
import cover1 from '../../data/cover/cover1.png';
import cover2 from '../../data/cover/cover2.png';
import cover3 from '../../data/cover/cover3.png';
import cover4 from '../../data/cover/cover4.png';
import underline from './underline.svg';
import logo from './logo.svg';
import { FaSearch } from 'react-icons/fa';

import './styles.scss';

// == Composant
const Home = () => (
  <Page>
    <header className="home-header">
      <div className="home-header__logo">
        <h1 className="home-header__title">oak</h1>
        <img className="home-header__img" src={logo} alt="illustration" />
      </div>
      <h2 className="home-header__baseline">pour les graines de lecteurs !</h2>
      <h3 className="home-header__slogan">Recherchez un livre, ajoutez le à votre liste de lecture et partagez-la</h3>
    </header>
    <section className="home-search">
      <form action="" className="home-search__form">
        <label htmlFor="search">Recherche :</label>
        <input className="home-search__input" type="text" name="search" id="search" />
        <button className="home-search__button" type="submit"><FaSearch className="home-search__icon" /></button>
      </form>
    </section>
    <section className="home-news">
      <div>
        <h2 className="home-news__title">Les dernières nouveautés</h2>
        <img className="home-news__underline" src={underline} alt="illustration" />
      </div>
      <div className="home-bookselection">
        <img className="home-bookselection__book" src={cover1} alt="illustration" />
        <img className="home-bookselection__book" src={cover2} alt="illustration" />
        <img className="home-bookselection__book" src={cover3} alt="illustration" />
        <img className="home-bookselection__book" src={cover4} alt="illustration" />
      </div>
    </section>
  </Page>
);

// == Export
export default Home;
