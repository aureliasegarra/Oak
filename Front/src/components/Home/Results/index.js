import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Results = ({ results }) => {
  return (
    <Card />
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Results;
