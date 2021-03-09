// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import { BsSearch } from 'react-icons/bs';

// == Composant
const Search = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <section className="home-search">
      <form
        onSubmit={handleOnSubmit}
        className="home-search__form"
      >
        <input
          className="home-search__input"
          type="text"
          name="search"
          id="search"
          placeholder="Recherchez un livre"
          value={inputValue}
          onChange={handleOnChange}
        />
        <button
          className="home-search__button"
          type="submit"
        >
          <BsSearch className="home-search__icon" />
        </button>
      </form>
    </section>
  );
};

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Search;
