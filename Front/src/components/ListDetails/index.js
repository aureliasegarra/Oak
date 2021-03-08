// == Import npm
import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { TiEye as SeeDetailsIcon, TiPencil as ChangeListNameIcon, TiDelete as DeleteListIcon } from 'react-icons/ti';

// == Composant
const ListDetails = ({
  label, id, deleteList, modifyListName, fetchListDetails
}) => {
  useEffect(() => {
    fetchListDetails();
  }, []);

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
    </div>
  );
};

ListDetails.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  books: PropTypes.array,
  deleteList: PropTypes.func,
  modifyListName: PropTypes.func,
};

ListDetails.defaultProps = {
  books: [],
  deleteList: () => {},
  modifyListName: () => {},
};

// == Export
export default ListDetails;
