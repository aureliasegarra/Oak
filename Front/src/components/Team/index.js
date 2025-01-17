// == Import npm
import React from 'react';

import { SiLinkedin } from 'react-icons/si';

import './style.scss';
import character1 from 'src/assets/team/character1.svg';
import character2 from 'src/assets/team/character2.svg';
import character3 from 'src/assets/team/character3.svg';
import character4 from 'src/assets/team/character4.svg';

// == Composant
const Team = () => (
  <div className="aboutus">
    <div className="memberscontainer">
      <article className="members">
        <img className="images" src={character3} alt="illustration" />
        <h3 className="name">Aurelia</h3>
        <p className="description">Front-End Developer</p>
        <p className="description">Product Owner</p>
        <a href="https://www.linkedin.com/in/aureliasegarra/">
          <SiLinkedin className="linkedin" />
        </a>
      </article>
      <article className="members">
        <img className="images" src={character1} alt="illustration" />
        <h3 className="name">Anthony</h3>
        <p className="description">Lead Developer Back-End</p>
        <p className="description">Git Master</p>
        <a href="https://www.linkedin.com/in/monsieurz/">
          <SiLinkedin className="linkedin" />
        </a>
      </article>
      <article className="members">
        <img className="images" src={character2} alt="illustration" />
        <h3 className="name">Nicolas</h3>
        <p className="description">Lead Developer Front-End</p>
        <a href="https://www.linkedin.com/in/nicolas-pellan/">
          <SiLinkedin className="linkedin" />
        </a>
      </article>
      <article className="members">
        <img className="images" src={character4} alt="illustration" />
        <h3 className="name">Marina</h3>
        <p className="description">Front-End Developer</p>
        <p className="description">Scrum Master</p>
        <a href="https://www.linkedin.com/in/marina-garibotti/">
          <SiLinkedin className="linkedin" />
        </a>
      </article>
    </div>
    <div className="about">
      <h2 className="abouttitle">À propos</h2>
      <div className="text">
        <p className="paragraph1">
          Oak est le site que nous avons créé pour notre projet de fin de formation chez O'Clock,
          labellisée Grande École du Numérique.
        </p>
        <p className="paragraph2">
          Ce projet clôture une formation intensive de 6 mois en
          développement web et web mobile fullstack.
        </p>
        <p className="paragraph3">
          Oak vous permet de rechercher de nouvelles idées de lecture pour vos enfants,
          de les organiser sous forme de listes de lecture et de les partager avec vos proches !
          Vous pouvez également noter vos lectures et partager vos avis avec la communauté Oak !
        </p>
      </div>
    </div>
  </div>
);

// == Export
export default Team;
