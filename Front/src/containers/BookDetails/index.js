import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookDetails from 'src/components/BookDetails';
import { readListId, toReadListId } from 'src/selectors/bookDetails';
import {
  addToReadList, addToToReadList, fetchBookDetail, fetchBookReviews,
} from 'src/actions/search';
import { sendComment, sendRating, saveBookToDB } from 'src/actions/bookDetail';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    id,
    isLogged: JSON.parse(localStorage.getItem('isLogged')) || state.user.isLogged,
    readListId: readListId(state.user.lists),
    toReadListId: toReadListId(state.user.lists),
    lists: state.user.lists,
    book: state.book,
    bookAPIId: state.book.bookId,
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
  sendComment: (labelComment, bookAPIId, bookGoogleId) => dispatch(sendComment(labelComment, bookAPIId, bookGoogleId)),
  sendRating: (rating, bookAPIId, bookGoogleId) => dispatch(sendRating(rating, bookAPIId, bookGoogleId)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default withRouter(container);
