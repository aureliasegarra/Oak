// == Import npm
import React from 'react';

import { TiUserAdd } from 'react-icons/ti';
import { BiLogIn } from 'react-icons/bi';
import { FaMapMarkerAlt, FaSearch, FaRegCopyright } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

// == Import
import './styles.scss';
import logo from './logo-glan.svg';

// == Composant
const Menu = () => (
  <div className="menu">
    <div className="menu__logo">
      <img className="menu__logo__glan" src={logo} alt="illustration" />
      <h2 className="menu__logo__title">oak</h2>
    </div>
    <div className="menu__logo__container">
      <TiUserAdd className="menu__logo__user" />
      <BiLogIn className="menu__logo__user" />
      <FaMapMarkerAlt className="menu__logo__user" />
      <FaSearch className="menu__logo__user" />
      <RiTeamFill className="menu__logo__user" />
      <FaRegCopyright className="menu__logo__user" />
    </div>
  </div>
);

// == Export
export default Menu;
