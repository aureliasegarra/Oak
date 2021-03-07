import { connect } from 'react-redux';
import List from 'src/components/UserProfile/List';
import { deleteList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteList: (listId) => dispatch(deleteList(listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
