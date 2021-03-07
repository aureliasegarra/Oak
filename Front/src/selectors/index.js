/* eslint-disable import/prefer-default-export */
export const getAvatar = (avatarId) => {
  let avatarURL = '';
  if (avatarId === 1) {
    avatarURL = '/assets/avatars/avatar1.svg';
  }
  return avatarURL;
};
