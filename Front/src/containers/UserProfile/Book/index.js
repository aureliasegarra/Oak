import { connect } from 'react-redux';
import Book from 'src/components/UserProfile/Book';
import { deleteBook, moveBook } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  lists: state.user.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveBook: (bookId, listId) => dispatch(moveBook(bookId, listId)),
  deleteBook: (bookId, listId) => dispatch(deleteBook(bookId, listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
