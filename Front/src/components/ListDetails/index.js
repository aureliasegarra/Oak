// == Import npm
import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiEye as SeeDetailsIcon, TiPencil as ChangeListNameIcon, TiDelete as DeleteListIcon } from 'react-icons/ti';

import Book from 'src/containers/UserProfile/Book';

// == Composant
const ListDetails = ({
  list, deleteList, modifyListName, fetchListDetails,
}) => {
  useEffect(() => {
    if (!list) {
      fetchListDetails();
    }
  }, [list]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState(list.label);

  const handleDeleteList = () => {
    deleteList(list.id);
  };

  const handleModifyList = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyListName(listName, list.id);
    setIsModalOpen(false);
  };

  return (
    <div className="userprofile-list">
      <div className="userprofile-list__header">
        {!isModalOpen ? (
          <h2 className="userprofile-list__title">{list.label}</h2>
        )
          : (
            <form onSubmit={handleSubmit}>
              <input type="text" value={listName} onChange={handleChange} />
            </form>
          )}
        <div>
          <Link to={`/list/${list.id}`}>
            <SeeDetailsIcon />
          </Link>
          <ChangeListNameIcon onClick={handleModifyList} />
          <DeleteListIcon onClick={handleDeleteList} />
        </div>
      </div>
      {list.books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          {...book}
        />
      ))}
    </div>
  );
};

ListDetails.propTypes = {
  list: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    books: PropTypes.array,
  }).isRequired,
  fetchListDetails: PropTypes.func,
  deleteList: PropTypes.func,
  modifyListName: PropTypes.func,
};

ListDetails.defaultProps = {
  fetchListDetails: () => {},
  deleteList: () => {},
  modifyListName: () => {},
};

// == Export
export default ListDetails;
