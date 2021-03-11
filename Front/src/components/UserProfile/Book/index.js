// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiDelete as DeleteBookIcon } from 'react-icons/ti';
import { CgMoveTask } from 'react-icons/cg';

// == Composant
const Book = ({
  title,
  id,
  deleteBook,
  moveBook,
  lists,
}) => {
  const [isMovingModalOpen, setIsMovingModalOpen] = useState(false);

  const handleClick = () => {
    deleteBook(id);
  };

  const handleModalClick = () => {
    console.log('je veux ouvrir la modale');
    setIsMovingModalOpen(!isMovingModalOpen);
  };

  const handleChange = () => {
    console.log('je veux bouger le livre');
    moveBook(id);
  };

  return (
    <div className="userprofile-list__bookcard">
      <p>{title}</p>
      {!isMovingModalOpen && (
        <CgMoveTask className="book-button__move" onClick={handleModalClick} />
      )}
      {isMovingModalOpen && (
        <form>
          <select onChange={handleChange}>
            {lists.map((list) => (
              <option
                key={list.id}
                id={list.id}
                value={list.label}
              >
                {list.label}
              </option>
            ))}
          </select>
        </form>
      )}
      <DeleteBookIcon onClick={handleClick} />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  lists: PropTypes.array,
  deleteBook: PropTypes.func,
  moveBook: PropTypes.func,
};

Book.defaultProps = {
  deleteBook: () => {},
  moveBook: () => {},
  lists: [],
};

// == Export
export default Book;
