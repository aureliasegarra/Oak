// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import { SiLinkedin } from 'react-icons/si';

// == Composant
const Team = () => (
  <div>
    <div>
      <h2>La team Oak</h2>
      <article className="members">
        <h3 className="name">Aurelia</h3>
        <p className="description">Developer Front-End</p>
        <p className="description">Product Owner</p>
        <Link to="https://www.linkedin.com/in/aureliasegarra/">
          <SiLinkedin className="linkedin" />
        </Link>
      </article>
      <article className="members">
        <h3 className="name">Anthony</h3>
        <p className="description">Lead developer Back-End</p>
        <p className="description">Git Master</p>
        <Link to="https://www.linkedin.com/in/monsieurz/">
          <SiLinkedin className="linkedin" />
        </Link>
      </article>
      <article className="members">
        <h3 className="name">Nicolas</h3>
        <p className="description">Lead developer Front-End</p>
        <Link to="https://www.linkedin.com/in/nicolas-pellan/">
          <SiLinkedin className="linkedin" />
        </Link>
      </article>
      <article className="members">
        <h3 className="name">Marina</h3>
        <p className="description">Developer Front-End</p>
        <p className="description">Scrum Master</p>
        <Link to="https://www.linkedin.com/in/marina-garibotti/">
          <SiLinkedin className="linkedin" />
        </Link>
      </article>
    </div>
    <div>
      <h2>À propos</h2>
      <p>
        Oak est le site que nous avons créé pour notre projet de fin de formation chez O'Clock.
        Ce projet clôture une formation intensive de 6 mois en développement web fullstack.
      </p>
      <p>
        Oak vous permet de rechercher de nouvelles idées de lecture pour vos enfants,
        de les organiser sous forme de listes de lecture et de les partager avec vos proches !
        Vous pouvez également noter vos lectures et partager vos avis avec la communauté Oak !
      </p>
    </div>
  </div>
);

// == Export
export default Team;
