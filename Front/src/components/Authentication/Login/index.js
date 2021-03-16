import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Field from 'src/containers/Field';
import PropTypes from 'prop-types';
import './style.scss';

const Login = ({ login, isLogged }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };
  if (isLogged) return (<Redirect to="/profil/:pseudo/:id" />);
  return (
    <div className="right">
      <form className="login__form" onSubmit={handleOnSubmit}>
        <section className="copy">
          <h2>Se connecter</h2>
          <div>
            <p>Pas encore inscrit ? <Link to="/register"><strong>Inscription</strong></Link></p>
          </div>
        </section>
        <Field
          type="email"
          label="Email"
          name="login_email"
          className="email__input"
          placeholder=""
        />
        <Field
          type="password"
          label="Mot de passe"
          name="login_password"
          placeholder=""
        />
        <button type="submit" className="login__submit">C'est parti !</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
