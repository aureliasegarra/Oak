// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiPencil, TiDelete } from 'react-icons/ti';

import Book from 'src/containers/Book';

// == Composant
const List = ({
  label, books, id, deleteList,
}) => {
  const handleDeleteList = () => {
    deleteList(id);
  };

  return (
    <div className="userprofile-list">
      <div className="userprofile-list__header">
        <h2 className="userprofile-list__title">{label}</h2>
        <div>
          <TiPencil />
          <TiDelete onClick={handleDeleteList} />
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
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  books: PropTypes.array,
  deleteList: PropTypes.func,
};

List.defaultProps = {
  books: [],
  deleteList: () => {},
};

// == Export
export default List;
