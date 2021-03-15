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

import { MdContentCopy } from 'react-icons/md';

// == Composant
const List = ({
  label, books, id, deleteList, modifyListName,
}) => {
  const [isAddListModalOpen, setIsAddListModalOpen] = useState(false);
  const [listName, setListName] = useState(label);
  const [isSharingModalOpen, setIsSharingModalOpen] = useState(false);

  const handleDeleteList = () => {
    deleteList(id);
  };

  const handleModifyList = () => {
    setIsAddListModalOpen(!isAddListModalOpen);
  };

  const handleChange = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyListName(listName, id);
    setIsAddListModalOpen(false);
  };

  const handleShareClick = () => {
    setIsSharingModalOpen(!isSharingModalOpen);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`http://oak.surge.sh/list/${id}`);
    setIsSharingModalOpen(!isSharingModalOpen);
  };

  return (
    <div className="userprofile-list">
      <div className="userprofile-list__header">
        {!isAddListModalOpen ? (
          <h2 className="userprofile-list__title">{label}</h2>
        )
          : (
            <form onSubmit={handleSubmit}>
              <input type="text" value={listName} onChange={handleChange} />
            </form>
          )}
        <div>
          <Link to={`/list/${id}`}>
            <SeeDetailsIcon />
          </Link>
          {(label !== 'Lus' && label !== 'A lire') && (
            <>
              <ChangeListNameIcon onClick={handleModifyList} />
              <DeleteListIcon onClick={handleDeleteList} />
            </>
          )}
        </div>
      </div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          listId={id}
          {...book}
        />
      ))}
      <div className="userprofile-list__share">
        {!isSharingModalOpen ? (
          <button type="button" className="userprofile-list__share__button" onClick={handleShareClick}>Partager</button>
        ) : (
          <div className="userprofile-list__share__modal">
            <input type="text" className="userprofile-list__modal__input" defaultValue={`http://oak.surge.sh/list/${id}`} />
            <MdContentCopy className="userprofile-list__modal__copy" onClick={handleCopyClick} />
          </div>
        )}
      </div>
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
