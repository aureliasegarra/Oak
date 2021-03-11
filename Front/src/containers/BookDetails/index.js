import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookDetails from 'src/components/BookDetails';
import { readListId, toReadListId } from 'src/selectors/bookDetails';
import {
  addToReadList, addToToReadList, fetchBookDetail, fetchBookReviews,
} from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    id,
    isLogged: state.user.isLogged,
    readListId: readListId(state.user.lists),
    toReadListId: toReadListId(state.user.lists),
    lists: state.user.lists,
    book: state.book,
    reviews: state.book.reviews,
    rating: state.book.rating,
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
  fetchBookDetail: (bookId) => dispatch(fetchBookDetail(bookId)),
  fetchBookReviews: (bookId) => dispatch(fetchBookReviews(bookId)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default withRouter(container);
