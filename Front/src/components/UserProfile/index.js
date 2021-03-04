// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  NavLink,
} from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const UserProfile = ({
  isLogged, pseudo, avatar, lists, fetchUserInfos,
}) => {
  useEffect(() => {
    fetchUserInfos();
  }, []);

  return (
    <>
      {isLogged && (
      <main className="userprofile-main">
        <div className="userprofile-infos">
          <p className="userprofile-infos__avatar">{avatar}</p>
          <h1 className="userprofile-infos__pseudo">{pseudo}</h1>
        </div>
        <div className="userprofile-lists-container">
          {lists.map((list) => (
            <div className="userprofile-list">
              <p className="userprofile-list__title">{list.name}</p>
              {list.content.map((book) => (
                <div className="userprofile-list__book">{book.booktitle}</div>
              ))}
            </div>
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
  avatar: PropTypes.number,
  lists: PropTypes.array,
  fetchUserInfos: PropTypes.func,
};

UserProfile.defaultProps = {
  avatar: 0,
  lists: [],
  fetchUserInfos: () => {},
};

// == Export
export default UserProfile;
