// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Book = ({
  title,
}) => (
  <div className="userprofile-list__bookcard">
    <p>{title}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

Book.defaultProps = {

};

// == Export
export default Book;
