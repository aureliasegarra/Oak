// == Import npm
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiEye as SeeDetailsIcon, TiPencil as ChangeListNameIcon, TiDelete as DeleteListIcon } from 'react-icons/ti';

import Book from 'src/containers/UserProfile/Book';

// == Composant
const List = ({
  label, books, id, deleteList, modifyListName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState(label);

  const handleDeleteList = () => {
    deleteList(id);
  };

  const handleModifyList = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyListName(listName, id);
    setIsModalOpen(false);
  };

  return (
    <div className="userprofile-list">
      <div className="userprofile-list__header">
        {!isModalOpen ? (
          <h2 className="userprofile-list__title">{label}</h2>
        )
          : (
            <form onSubmit={handleSubmit}>
              <input type="text" value={listName} onChange={handleChange} />
            </form>
          )}
        <div>
          <Link to={`/list/${label}/${id}`}>
            <SeeDetailsIcon />
          </Link>
          <ChangeListNameIcon onClick={handleModifyList} />
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
