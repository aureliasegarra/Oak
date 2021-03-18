// == Import npm
import React from 'react';

// == Import
import logo from './logo.png';
import './styles.scss';

// == Composant
const Header = () => (
  <header className="home-header">
    <div className="home-header__logo">
      <h1 className="home-header__title">oak</h1>
      <img className="home-header__img" src={logo} alt="illustration" />
    </div>
    <h2 className="home-header__baseline">pour les graines de lecteurs</h2>
    <h3 className="home-header__slogan">Recherchez un livre, ajoutez-le à votre liste de lecture et partagez-la !</h3>
  </header>
);

// == Export
export default Header;
