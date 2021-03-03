// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import { FaSearch } from 'react-icons/fa';

// == Composant
const Search = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
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
          <FaSearch className="home-search__icon" />
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
