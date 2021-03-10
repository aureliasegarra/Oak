import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookDetails from 'src/components/BookDetails';
import { findBookById } from 'src/selectors/results';
import { readListId, toReadListId } from 'src/selectors/bookDetails';
import { addToReadList, addToToReadList } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    isLogged: state.user.isLogged,
    lists: state.user.lists,
    result: findBookById(state.search.results, id),
    readListId: readListId(state.user.lists),
    toReadListId: toReadListId(state.user.lists),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToReadList: (publicApiId, title, listId) => {
    const action = addToReadList(publicApiId, title, listId);
    dispatch(action);
  },
  addToToReadList: (publicApiId, title, listId) => {
    const action = addToToReadList(publicApiId, title, listId);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default withRouter(container);
