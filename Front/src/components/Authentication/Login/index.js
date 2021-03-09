import React from 'react';
import Field from 'src/containers/Field';
import PropTypes from 'prop-types';
import './style.scss';

const Login = ({ login }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };
  return (
    <div className="login">
      <h2 className="login__title">Se connecter</h2>
      <form className="login__form" onSubmit={handleOnSubmit}>
        <Field
          type="email"
          label="Email"
          name="login_email"
          placeholder="monadresse@email.fr"
          className="email__input"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="login_password"
          placeholder="*******"
        />
        <button type="submit" className="login__submit">Connexion</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
