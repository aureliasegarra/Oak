// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { RiPlayListAddLine as AddListIcon } from 'react-icons/ri';
import { TiDelete as CloseModalIcon } from 'react-icons/ti';

// == Composant
const AddList = ({
  createList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event) => {
    setNewListName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createList(newListName);
    setIsModalOpen(false);
    setNewListName('');
  };

  return (
    <div className="userprofile-addlist">
      <p className="userprofile-addlist__text">Ajouter une liste</p>
      <AddListIcon className="userprofile-addlist__button" onClick={handleModalClick} />
      {isModalOpen && (
        <div className="userprofile-addlistmodal">
          <div className="userprofile-addlistmodalcontent">
            <CloseModalIcon className="userprofile-addlist__button" onClick={handleModalClick} />
            <form className="list-form" onSubmit={handleSubmit}>
              <label htmlFor="list-label">Nommez votre liste</label>
              <input
                type="text"
                id="list-label"
                name="list-label"
                value={newListName}
                onChange={handleChange}
                placeholder="Nommez votre liste"
                className="list-input"
              />
              <button className="list-button" type="submit">Créez ma liste</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

AddList.propTypes = {
  createList: PropTypes.func,
};

AddList.defaultProps = {
  createList: () => {},
};

// == Export
export default AddList;
