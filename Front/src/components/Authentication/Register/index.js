/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1 className="title">Bienvenue chez Oak</h1>
          <h2 className="subtitle">Recherchez un livre, ajoutez-le à votre liste de lecture et partagez-la !</h2>
        </section>
      </div>
      <div className="right">
        <form className="register__form" onSubmit={handleOnSubmit}>
          <section className="copy">
            <h2>S'inscrire</h2>
            <div>
              <p>Nous sommes très heureux de vous acceuillir chez Oak !</p>
            </div>
          </section>
          <Field
            type="username"
            label="Nom d'utilisateur"
            name="register_username"
            placeholder=""
          />
          <Field
            type="email"
            label="Votre Email"
            name="register_email"
            placeholder=""
          />
          <Field
            type="password"
            label="Votre meilleur mot de passe"
            name="register_password"
            placeholder="Au moins 6 caractères"
          />
          <div className="input-container__cta">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark" />
              <p>
                <span className="small">
                  Oui, j'accepte les <a href="#">termes et conditions</a> ainsi que <br /> la <a href="#">politique de confidentialité.</a>
                </span>
              </p>
            </label>
          </div>
          <button type="submit" className="register__submit">Je m'inscris</button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
