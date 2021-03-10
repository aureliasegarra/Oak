// == Import npm
import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiEye as SeeDetailsIcon, TiPencil as ChangeListNameIcon, TiDelete as DeleteListIcon } from 'react-icons/ti';

import Book from './Book';

// == Composant
const ListDetails = ({
  id, list, deleteList, modifyListName, fetchListDetails,
}) => {
  useEffect(() => {
    fetchListDetails(id);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState(list.label);

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
    <main className="listdetails-main">
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
            <Link to={`/list/${id}`}>
              <SeeDetailsIcon />
            </Link>
            <ChangeListNameIcon onClick={handleModifyList} />
            <DeleteListIcon onClick={handleDeleteList} />
          </div>
        </div>
        {list.books && list.books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            {...book}
          />
        ))}
      </div>
    </main>
  );
};

ListDetails.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    books: PropTypes.array,
  }),
  id: PropTypes.number.isRequired,
  fetchListDetails: PropTypes.func,
  deleteList: PropTypes.func,
  modifyListName: PropTypes.func,
};

ListDetails.defaultProps = {
  list: {
    id: 1,
    label: '',
    books: [],
  },
  fetchListDetails: () => {},
  deleteList: () => {},
  modifyListName: () => {},
};

// == Export
export default ListDetails;
