import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookDetails from 'src/components/BookDetails';
import { findBookById } from 'src/selectors/results';
import { readListId, toReadListId } from 'src/selectors/bookDetails';
import { addToReadList } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    lists: state.user.lists,
    result: findBookById(state.search.results, id),
    readListId: readListId(state.user.lists),
    toReadListId: toReadListId(state.user.lists),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToReadList: (id, title, listId) => {
    const action = addToReadList(id, title, listId);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default withRouter(container);
