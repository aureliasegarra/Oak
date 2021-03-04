import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({ label, name, type, placeholder}) => (
  <div className="field">
    <label htmlFor={name} className="field__label">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="field__input"
      
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Field;
