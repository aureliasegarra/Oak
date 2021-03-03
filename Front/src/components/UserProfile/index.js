// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const UserProfile = ({
  isLogged, pseudo, avatar, lists,
}) => (
  <main className="userprofile-main">
    <div className="userprofile-infos">
      <p className="userprofile-infos__avatar">{avatar}</p>
      <h1 className="userprofile-infos__pseudo">{pseudo}</h1>
      <div>
        {isLogged && (
        <p>Vous êtes loggé</p>
        )}
      </div>
      <div>
        {!isLogged && (
        <p>Veuillez vous connecter</p>
        )}
      </div>
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
);

UserProfile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf({
    name: PropTypes.string,
  }),
};

UserProfile.defaultProps = {
  lists: [],
};

// == Export
export default UserProfile;
