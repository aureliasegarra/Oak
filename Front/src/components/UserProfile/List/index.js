// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiPencil, TiDelete } from 'react-icons/ti';

import Book from '../Book';

// == Composant
const List = ({
  label, books,
}) => (
  <div className="userprofile-list">
    <div className="userprofile-list__header">
      <h2 className="userprofile-list__title">{label}</h2>
      <div>
        <TiPencil />
        <TiDelete />
      </div>
    </div>
    {books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        {...book}
      />
    ))}
  </div>
);

List.propTypes = {
  label: PropTypes.string.isRequired,
  books: PropTypes.array,
};

List.defaultProps = {
  books: [],
};

// == Export
export default List;
