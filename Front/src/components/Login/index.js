import React from 'react';
import Field from 'src/components/Login/Field';
import './style.scss';

const Login = () => (
  <div className="login">
    <h2 className="login__title">Se connecter</h2>
    <form className="login__form">
      <Field
        type="email"
        label="Email"
        name="email"
        placeholder="Exemple: prénom.nom@exemple.fr"
      />
      <Field
        type="password"
        label="Mot de passe"
        name="password"
        placeholder="*******"
      />
      <button type="submit" className="login__submit">Connexion</button>
    </form>
  </div>
);

export default Login;
