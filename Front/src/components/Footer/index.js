// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <footer className="home-footer">
    <p className="home-footer__text"><Link to="/">Mentions légales</Link> - Oak - 2020</p>
  </footer>
);

// == Export
export default Footer;
