import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Field from 'src/containers/Field';
import PropTypes from 'prop-types';
import './style.scss';

const Login = ({
  login, isLogged, username, id,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };
  if (isLogged) return (<Redirect to={`/profil/${username}/${id}`} />);
  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1 className="main-title">Bienvenue chez Oak</h1>
          <h2 className="subtitle">Recherchez un livre, ajoutez-le à votre liste de lecture et partagez-la !</h2>
        </section>
      </div>
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
            placeholder="Saisissez votre email"
            isRequired
          />
          <Field
            type="password"
            label="Mot de passe"
            name="login_password"
            placeholder="Saisissez votre mot de passe"
            isRequired
          />
          <button type="submit" className="login__submit">C'est parti !</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  username: PropTypes.string,
  id: PropTypes.number,
};

Login.defaultProps = {
  isLogged: false,
  username: '',
  id: 0,
};

export default Login;
