import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import './style.scss';

const Register = ({ register }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    register();
  };
  return (
    <div className="register">
      <h2 className="register__title">S'inscrire</h2>
      <form className="register__form" onSubmit={handleOnSubmit}>
        <Field
          type="username"
          label="Nom d'utilisateur"
          name="register_username"
          placeholder="Nom d'utilisateur"
        />
        <Field
          type="email"
          label="Email"
          name="register_email"
          placeholder="monadresse@email.fr"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="register_password"
          placeholder="*******"
        />
        <button type="submit" className="register__submit">Inscription</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
