// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { RiPlayListAddLine } from 'react-icons/ri';

// == Composant
const AddList = ({
  openModal, toggleAddListModal, addListInputValue, onAddListInputValueChange, createList,
}) => {
  const openAddListModal = () => {
    toggleAddListModal();
  };

  const handleAddListInputValueChange = (event) => {
    onAddListInputValueChange(event.target.value);
  };

  const addList = (event) => {
    event.preventDefault();
    createList();
    toggleAddListModal();
  };

  return (
    <div className="userprofile-addlist">
      <RiPlayListAddLine className="userprofile-addlist__button" onClick={openAddListModal} />
      <p className="userprofile-addlist__text">Ajouter une liste</p>
      {openModal && (
        <div className="userprofile-addlistmodal">
          <div className="userprofile-addlistmodalcontent">
            <form onSubmit={addList}>
              <label htmlFor="list-label">Nommez votre liste</label>
              <input
                type="text"
                id="list-label"
                name="list-label"
                value={addListInputValue}
                onChange={handleAddListInputValueChange}
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
  openModal: PropTypes.bool,
  toggleAddListModal: PropTypes.func,
  addListInputValue: PropTypes.string,
  onAddListInputValueChange: PropTypes.func,
  createList: PropTypes.func,
};

AddList.defaultProps = {
  openModal: false,
  addListInputValue: '',
  toggleAddListModal: () => {},
  onAddListInputValueChange: () => {},
  createList: () => {},
};

// == Export
export default AddList;
