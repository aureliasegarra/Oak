export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const SET_USER_INFOS = 'SET_USER_INFOS';

export const setUserInfos = (user) => ({
  type: SET_USER_INFOS,
  user,
});
