import React from 'react';
import Login from 'src/containers/Login';
import './style.scss';

const Auth = () => (
  <div className="split-screen">
    <div className="left">
      <section className="copy">
        <h1 className="main-title">Bienvenue chez Oak</h1>
        <h2 className="subtitle">Recherchez un livre, ajoutez-le à votre liste de lecture et partagez-la !</h2>
      </section>
    </div>
    <Login />
  </div>
);

export default Auth;
