// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import AddListModal from 'src/containers/AddListModal';

import { RiPlayListAddLine } from 'react-icons/ri';

// == Composant
const AddList = ({ openModal, toggleAddListModal }) => {
  const handleAddListModal = () => {
    toggleAddListModal();
  };

  return (
    <div className="userprofile-addlist">
      <RiPlayListAddLine className="userprofile-addlist__button" onClick={handleAddListModal} />
      <p className="userprofile-addlist__text">Ajouter une liste</p>
      {openModal && (
        <AddListModal />
      )}
    </div>
  );
};

AddList.propTypes = {
  openModal: PropTypes.bool,
  toggleAddListModal: PropTypes.func,
};

AddList.defaultProps = {
  openModal: false,
  toggleAddListModal: () => {},
};

// == Export
export default AddList;
