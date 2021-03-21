// == Import npm
import React from 'react';

// == Import
import cover1 from 'src/assets/covers/cover1.png';
import cover2 from 'src/assets/covers/cover2.png';
import cover3 from 'src/assets/covers/cover3.png';
import cover4 from 'src/assets/covers/cover4.png';
import underline from './underline.svg';

import './styles.scss';

// == Composant
const News = () => (
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
);

// == Export
export default News;
