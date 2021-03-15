// == Import npm
import React, { useEffect, useState } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { MdContentCopy } from 'react-icons/md';

import Book from './Book';

// == Composant
const ListDetails = ({
  id, list, fetchListDetails,
}) => {
  useEffect(() => {
    fetchListDetails(id);
  }, []);

  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`http://oak.surge.sh${location.pathname}`);
  };

  return (
    <main className="listdetails-main">
      <Helmet>
        <title>{`Liste ${list.label} | Oak`}</title>
        <meta name="description" content={`Découvrez la liste de lecture ${list.label}`} />
      </Helmet>
      <div className="listdetails-list">
        <div className="listdetails-list__header">
          <h2 className="listdetails-list__title">{list.label}</h2>
        </div>
        {list.books && list.books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            {...book}
          />
        ))}
      </div>
      <button type="button" className="listdetails__share" onClick={handleShareClick}>Partager</button>
      {isModalOpen && (
        <div className="listdetails__modal">
          <input type="text" className="listdetails__modal__input" defaultValue={`http://oak.surge.sh${location.pathname}`} />
          <MdContentCopy className="listdetails__modal__copy" onClick={handleCopyClick} />
        </div>
      )}
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
