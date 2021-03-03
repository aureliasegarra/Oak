import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Results = ({ results }) => (
  <div>
    {results && (
      <div className="search-results">
        {results.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </div>
    )}
  </div>
);


Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Results;
