// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

import {RiPlayListAddLine} from 'react-icons/ri';

import UserInfos from 'src/containers/UserInfos';
import List from './List';
import AddList from 'src/containers/AddList';

// == Import
import './styles.scss';

// == Composant
const UserProfile = ({
  isLogged, pseudo, email, avatar, badge, lists, fetchUserInfos,
}) => {
  useEffect(() => {
    fetchUserInfos();
  }, []);

  return (
    <>
      {isLogged && (
      <main className="userprofile-main">
        <UserInfos />
        <AddList />
        <div className="userprofile-lists-container">
          {lists.map((list) => (
            <List list={list} />
          ))}
        </div>
      </main>
      )}
      {!isLogged && (
      <>
        <p>Vous devez être connecté pour accéder à votre profil</p>
        <NavLink to="/login">
          <button type="button">
            Se connecter
          </button>
        </NavLink>
      </>
      )}
    </>
  );
};

UserProfile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  lists: PropTypes.array,
  badge: PropTypes.string,
  fetchUserInfos: PropTypes.func,
};

UserProfile.defaultProps = {
  avatar: '0',
  lists: [],
  badge: 'Vous n\'avez pas encore reçu de badge',
  fetchUserInfos: () => {},
};

// == Export
export default UserProfile;
