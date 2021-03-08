// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiPencil as ChangeListNameIcon, TiDelete as DeleteListIcon } from 'react-icons/ti';

import Book from 'src/containers/UserProfile/Book';

// == Composant
const List = ({
  label, books, id, deleteList, modifyListName,
}) => {
  const [listName, setListName] = useState(label);

  const handleDeleteList = () => {
    deleteList(id);
  };

  const handleChange = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyListName(listName, id);
  };

  return (
    <div className="userprofile-list">
      <div className="userprofile-list__header">
        <h2 className="userprofile-list__title">{label}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={listName} onChange={handleChange} />
        </form>
        <div>
          <ChangeListNameIcon />
          <DeleteListIcon onClick={handleDeleteList} />
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
  modifyListName: PropTypes.func,
};

List.defaultProps = {
  books: [],
  deleteList: () => {},
  modifyListName: () => {},
};

// == Export
export default List;
