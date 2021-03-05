// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiPencil, TiDelete } from 'react-icons/ti';

import Book from '../Book';

// == Composant
const List = ({
  list,
}) => (
  <div className="userprofile-list">
    <div className="userprofile-list__header">
      <h2 className="userprofile-list__title">{list.label}</h2>
      <div>
        <TiPencil />
        <TiDelete />
      </div>
    </div>
    {list.books.map((book) => (
      <Book
        key={book.id}
        book={book}
      />
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.object.isRequired,
};

// == Export
export default List;
