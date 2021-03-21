// == Import npm
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdLogOut } from 'react-icons/io';

// == Import
import './styles.scss';
import { getAvatar } from 'src/selectors/getAvatar';
import badge1 from './books.png';
import badge2 from './study.png';
import badge3 from './nut.png';

// == Composant
const UserInfos = ({
  username,
  email,
  avatarId,
  handleLogout,
}) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleOnClick = () => {
    handleLogout();
    localStorage.clear();
    setIsLoggedOut(!isLoggedOut);
  };

  if (isLoggedOut) return (<Redirect to="/" exact />);

  return (
    <div className="userprofile-infos__wrapper">
      <div className="userprofile-infos">
        <div className="userprofile-infos__avatar">
          <img src={getAvatar(avatarId)} alt="Avatar" />
        </div>
        <div className="userprofile-infos__details">
          <h1 className="userprofile-infos__username">{username}</h1>
          <p className="userprofile-infos__email">{email}</p>
        </div>
      </div>

      <div className="userprofile-infos__badges">
        <div className="badge-container">
          <div className="badge-wrapper">
            <img className="badge-image" src={badge1} alt="book-badge" />
            <strong>25</strong>
          </div>
          <p>Livres lus</p>
        </div>
        <div className="badge-container">
          <div className="badge-wrapper">
            <img className="badge-image" src={badge2} alt="book-badge" />
            <strong>640</strong>
          </div>
          <p>Pages lues</p>
        </div>
        <div className="badge-container">
          <div className="badge-wrapper">
            <img className="badge-image" src={badge3} alt="book-badge" />
            <strong>25</strong>
          </div>
          <p>Oak gagnés</p>
        </div>
      </div>

      <div className="logout-container">
        <IoMdLogOut className="logout-icon" onClick={handleOnClick} />
      </div>
    </div>
  );
};

UserInfos.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarId: PropTypes.number,
  handleLogout: PropTypes.func.isRequired,
};

UserInfos.defaultProps = {
  avatarId: 1,
};

// == Export
export default UserInfos;
