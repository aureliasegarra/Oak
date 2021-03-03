import React from 'react';
import './style.scss';

const Login = () => (
  <div className="login">
    <button type="button" className="login__button">+</button>
    <form className="login__form">
      <input
        type="email"
        placeholder="Email"
        className="login__input"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="login__input"
      />
      <button type="submit" className="login__submit">Connexion</button>
    </form>
  </div>
);

export default Login;
