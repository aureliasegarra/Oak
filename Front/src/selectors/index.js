/* eslint-disable import/prefer-default-export */
import avatar1 from 'src/assets/avatars/avatar1.png';
import avatar2 from 'src/assets/avatars/avatar2.png';
import avatar3 from 'src/assets/avatars/avatar3.png';

export const getAvatar = (avatarId) => {
  let avatar = '';
  if (avatarId === 1) {
    avatar = avatar1;
  }
  else if (avatarId === 2) {
    avatar = avatar2;
  }
  else if (avatarId === 3) {
    avatar = avatar3;
  }
  return avatar;
};
