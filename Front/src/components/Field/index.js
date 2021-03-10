import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({
  label,
  name,
  type,
  placeholder,
  inputValue,
  onChangeInputValue,
}) => {
  const handleOnChange = (event) => {
    console.log('inputChange');
    onChangeInputValue(event.target.value);
  };
  return (
    <div className="field">
      <label htmlFor={name} className="field__label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleOnChange}
        className="field__input"
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  inputValue: '',
};

export default Field;