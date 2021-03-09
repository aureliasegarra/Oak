import React from 'react';
import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import './style.scss';

const Auth = () => (
  <div className="authentication">
    <Login />
    <Register />
  </div>
);

export default Auth;
