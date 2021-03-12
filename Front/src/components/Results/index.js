import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

import './styles.scss';

const Results = ({ results }) => (
  <div className="results-box">
    {results
      .map((result) => (
        <Book key={result.id} {...result} />
      ))}

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
