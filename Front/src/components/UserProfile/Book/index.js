// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiDelete } from 'react-icons/ti';

// == Composant
const Book = ({
  book,
}) => (
  <div className="userprofile-list__bookcard">
    <p>{book.booktitle}</p>
    <TiDelete />
  </div>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

// == Export
export default Book;
