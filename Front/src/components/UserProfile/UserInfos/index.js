// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const UserInfos = ({
  username, email, avatar, badge,
}) => (
  <div className="userprofile-infos">
    <div className="userprofile-infos__avatar">
      <p>{avatar}</p>
    </div>
    <div className="userprofile-infos__details">
      <h1 className="userprofile-infos__username">{username}</h1>
      <p className="userprofile-infos__email">{email}</p>
    </div>
    <div className="userprofile-infos__badges">
      {badge}
    </div>
  </div>
);

UserInfos.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  badge: PropTypes.string,
};

UserInfos.defaultProps = {
  avatar: '0',
  badge: 'Vous n\'avez pas encore reçu de badge',
};

// == Export
export default UserInfos;
