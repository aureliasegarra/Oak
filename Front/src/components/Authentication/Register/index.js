/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import { getAvatar } from 'src/selectors/index';

import './style.scss';

const Register = ({ register, saveAvatar }) => {
  const handleOnClick = (event) => {
    const avatarId = parseInt(event.target.id, 10);
    saveAvatar(avatarId);
  };

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
          <fieldset className="avatar-container">
            <legend className="avatar-container__text">Je choisi un avatar :</legend>
            <div className="avatar-wrapper">
              <img className="avatar" src={getAvatar(1)} alt="avatar" />
              <input type="radio" name="avatar-icon" id="1" value="1" onClick={handleOnClick} />
            </div>

            <div className="avatar-wrapper">
              <img className="avatar" src={getAvatar(2)} alt="avatar" />
              <input type="radio" name="avatar-icon" id="2" value="2" onClick={handleOnClick} />
            </div>

            <div className="avatar-wrapper">
              <img className="avatar" src={getAvatar(3)} alt="avatar" />
              <input type="radio" name="avatar-icon" id="3" value="3" onClick={handleOnClick} />
            </div>
          </fieldset>

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
  saveAvatar: PropTypes.func.isRequired,
};

export default Register;
