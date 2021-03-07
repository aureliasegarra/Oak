// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { RiPlayListAddLine as AddListIcon } from 'react-icons/ri';
import { TiDelete as CloseModalIcon } from 'react-icons/ti';

// == Composant
const AddList = ({
  isModalOpen, toggleAddListModal, addListInputValue, setNewListName, createList,
}) => {
  const handleClick = () => {
    toggleAddListModal();
  };

  const handleChange = (event) => {
    setNewListName(event.target.value);
  };

  const addList = (event) => {
    event.preventDefault();
    createList();
    toggleAddListModal();
  };

  return (
    <div className="userprofile-addlist">
      <AddListIcon className="userprofile-addlist__button" onClick={handleClick} />
      <p className="userprofile-addlist__text">Ajouter une liste</p>
      {isModalOpen && (
        <div className="userprofile-addlistmodal">
          <div className="userprofile-addlistmodalcontent">
            <CloseModalIcon className="userprofile-addlist__button" onClick={handleClick} />
            <form onSubmit={addList}>
              <label htmlFor="list-label">Nommez votre liste</label>
              <input
                type="text"
                id="list-label"
                name="list-label"
                value={addListInputValue}
                onChange={handleChange}
                placeholder="Nommez votre liste"
              />
              <button type="submit">Créez ma liste</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

AddList.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleAddListModal: PropTypes.func,
  addListInputValue: PropTypes.string,
  setNewListName: PropTypes.func,
  createList: PropTypes.func,
};

AddList.defaultProps = {
  isModalOpen: false,
  addListInputValue: '',
  toggleAddListModal: () => {},
  setNewListName: () => {},
  createList: () => {},
};

// == Export
export default AddList;
