import { connect } from 'react-redux';
import Book from 'src/components/UserProfile/Book';
import { deleteBook, moveBook } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  lists: state.user.lists,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (bookId) => dispatch(deleteBook(bookId)),
  moveBook: (bookId, listId) => dispatch(moveBook(bookId, listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
