// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TiUserAdd } from 'react-icons/ti';
import { BiLogIn } from 'react-icons/bi';
import { FaMapMarkerAlt, FaSearch, FaRegCopyright } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

// == Import
import './styles.scss';
import logo from './logo-glan.svg';

// == Composant
const Menu = ({ isLogged, username, id }) => {
  // const handleOnClick = () => {
  // onClick();
  // };

  // const className = open ? 'menu__burger__logo--open' : 'menu__burger__logo';

  const profileURL = `/profil/${username}/${id}`;

  return (
    <header className="menu">
      <div className="menu__logo">
        <img className="menu__logo__glan" src={logo} alt="illustration" />
        <NavLink to="/">
          <h2 className="menu__logo__title">oak</h2>
        </NavLink>
      </div>
      <div className="menu__burger">
        <label htmlFor="toggle" className="burger">&#9776;
          <input type="checkbox" id="toggle" />
        </label>
      </div>
      <div className="menu__logo__container">
        {isLogged && (
          <NavLink to={profileURL}>
            <TiUserAdd className="menu__logo__user" />
          </NavLink>
        )}
        {!isLogged && (
          <NavLink to="/login">
            <TiUserAdd className="menu__logo__user" />
          </NavLink>
        )}
        <NavLink to="/login">
          <BiLogIn className="menu__logo__user" />
        </NavLink>
        <NavLink to="/search">
          <FaSearch className="menu__logo__user" />
        </NavLink>
        <NavLink to="/">
          <FaMapMarkerAlt className="menu__logo__user" />
        </NavLink>
        <NavLink to="/">
          <RiTeamFill className="menu__logo__user" />
        </NavLink>
        <NavLink to="/">
          <FaRegCopyright className="menu__logo__user" />
        </NavLink>
      </div>
    </header>
  );
};

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

// == Export
export default Menu;
