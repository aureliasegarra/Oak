// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { getAvatar } from 'src/selectors';

// == Composant
const UserInfos = ({
  username, email, avatarId,
}) => (
  <div className="userprofile-infos">
    <div className="userprofile-infos__avatar">
      <img src={getAvatar(avatarId)} alt="Avatar" />
    </div>
    <div className="userprofile-infos__details">
      <h1 className="userprofile-infos__username">{username}</h1>
      <p className="userprofile-infos__email">{email}</p>
    </div>
  </div>
);

UserInfos.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarId: PropTypes.number,
};

UserInfos.defaultProps = {
  avatarId: 1,
};

// == Export
export default UserInfos;
