// == Import npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BiSearch, BiLogInCircle, BiUser } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri';

// == Import
import './styles.scss';
import logo from './logo-glan.svg';

// == Composant
const Menu = ({ isLogged, username, id }) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  const className = open ? 'menu__burger__logo--open' : 'menu__burger__logo';

  const classNameMenu = open ? 'menu__logo__container--open' : 'menu__logo__container';

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
        <span
          onClick={handleOnClick}
          className={className}
        />
      </div>
      <div className={classNameMenu}>
        {isLogged && (
          <NavLink to={profileURL}>
            <BiUser className="menu__logo__user" />
          </NavLink>
        )}
        {!isLogged && (
          <NavLink to="/login">
            <BiUser className="menu__logo__user" />
          </NavLink>
        )}
        <NavLink to="/login">
          <BiLogInCircle className="menu__logo__user" />
        </NavLink>
        <NavLink to="/search">
          <BiSearch className="menu__logo__user" />
        </NavLink>
        <NavLink to="/">
          <RiTeamFill className="menu__logo__user" />
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
