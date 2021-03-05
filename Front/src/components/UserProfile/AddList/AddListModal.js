// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const AddListModal = ({ addListInputValue, onAddListInputValueChange, createList }) => {
  const handleAddListInputValueChange = (event) => {
    console.log(event);
    onAddListInputValueChange(event.target.value);
  };

  const addList = (event) => {
    event.preventDefault();
    createList();
    console.log("j'ajoute une liste");
  };

  return (
    <div className="userprofile-addlistmodal">
      <div className="userprofile-addlistmodalcontent">
        <form onSubmit={addList}>
          <label>Nommez votre liste</label>
          <input
            type="text"
            value={addListInputValue}
            onChange={handleAddListInputValueChange}
          />
          <button type="submit">Créez ma liste</button>
        </form>
      </div>
    </div>
  );
};

// == Export
export default AddListModal;
