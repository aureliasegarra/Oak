import { connect } from 'react-redux';
import List from 'src/components/UserProfile/List';
import { deleteList, modifyListName } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteList: (listId) => dispatch(deleteList(listId)),
  modifyListName: (newListName, listId) => dispatch(modifyListName(newListName, listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
