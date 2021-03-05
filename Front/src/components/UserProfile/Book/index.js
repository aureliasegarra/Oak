// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiDelete } from 'react-icons/ti';

// == Composant
const Book = ({
  title,
}) => (
  <div className="userprofile-list__bookcard">
    <p>{title}</p>
    <TiDelete />
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

// == Export
export default Book;
