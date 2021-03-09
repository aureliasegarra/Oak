import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListDetails from 'src/components/ListDetails';
import { findListById } from 'src/selectors/listById';
import { fetchListDetails, deleteList, modifyListName } from 'src/actions/userProfile';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);

  return {
    list: findListById(state.user.lists, id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchListDetails: () => dispatch(fetchListDetails()),
  deleteList: (listId) => dispatch(deleteList(listId)),
  modifyListName: (newListName, listId) => dispatch(modifyListName(newListName, listId)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(ListDetails);

export default withRouter(container);
