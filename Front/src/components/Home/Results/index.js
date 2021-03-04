import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Results = ({ results }) => (
  <div>
    {results.map((result) => (
      <Book key={result.id} {...result} />
    ))}
    <p>Hello je suis tes résultats</p>
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
