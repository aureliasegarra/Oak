// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

import UserInfos from 'src/containers/UserInfos';
import AddList from 'src/containers/AddList';
import List from './List';

// == Import
import './styles.scss';

// == Composant
const UserProfile = ({
  isLogged, lists, fetchUserInfos,
}) => {
  /**
   * Fetchs user data when the component renders
   */
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
            <List
              key={list.id}
              list={list}
            />
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
  lists: PropTypes.array,
  fetchUserInfos: PropTypes.func,
};

UserProfile.defaultProps = {
  lists: [],
  fetchUserInfos: () => {},
};

// == Export
export default UserProfile;
