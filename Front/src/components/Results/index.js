import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import waiting from 'src/assets/images/waiting.svg';

import Book from './Book';

import './styles.scss';

const Results = ({ results }) => (
  <div className="results">
    <Helmet>
      <title>Résultats de recherche | Oak</title>
      <meta name="description" content="Découvrez les livres pour enfants correspondant à votre recherche" />
    </Helmet>
    {(results.length > 0) ? (
      <div className="results-box">
        {results.map((result) => (
          <Book key={result.id} {...result} />
        ))}
      </div>
    ) : (
      <div className="results-none">
        <img src={waiting} alt="" />
      </div>
    )}
  </div>
);

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Results;
