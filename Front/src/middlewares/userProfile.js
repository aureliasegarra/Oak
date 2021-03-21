import {
  FETCH_USER_INFOS,
  setUserInfos,
  fetchUserInfos,
  FETCH_LIST_DETAILS,
  setListDetails,
  CREATE_LIST,
  DELETE_LIST,
  DELETE_BOOK,
  MODIFY_LIST_NAME,
  MOVE_BOOK,
} from 'src/actions/userProfile';

import axiosInstance from 'src/api/herokuAPI';

const userProfile = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USER_INFOS: {
      try {
        const result = await axiosInstance.get('/user/me');
        store.dispatch(setUserInfos(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_LIST_DETAILS: {
      try {
        const result = await axiosInstance.get(`/list/${action.listId}`);
        store.dispatch(setListDetails(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case CREATE_LIST:
      try {
        await axiosInstance.post('/list', {
          label: action.newListName,
          description: 'Description de ma liste',
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case MODIFY_LIST_NAME:
      try {
        await axiosInstance.patch(`/list/${action.listId}`, {
          label: action.newListName,
          id: action.listId,
          description: 'test',
          position: 0,
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case DELETE_LIST:
      try {
        await axiosInstance.delete(`/list/${action.listId}`);
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case DELETE_BOOK:
      try {
        await axiosInstance.delete('/listHasBook/', {
          data: {
            book_id: action.bookId,
            list_id: action.listId,
          },
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case MOVE_BOOK:
      try {
        await axiosInstance.patch('/listHasBook', {
          book_id: action.bookId,
          list_id: action.listId,
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    default:
      next(action);
  }
};

export default userProfile;
