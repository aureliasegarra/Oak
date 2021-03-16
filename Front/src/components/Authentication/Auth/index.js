import React from 'react';
import Login from 'src/containers/Login';
import './style.scss';

const Auth = () => (
  <div className="split-screen">
    <div className="left">
      <section className="copy">
        <h1 className="title">Bienvenue <br /> chez Oak</h1>
        <h2 className="subtitle">Recherchez un livre,<br /> ajoutez-le à votre liste de lecture <br /> et partagez-la !</h2>
      </section>
    </div>
    <Login />
  </div>
);

export default Auth;
