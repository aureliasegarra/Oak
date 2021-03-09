import { connect } from 'react-redux';
import ListDetails from 'src/components/ListDetails';
import { fetchListDetails } from '../../actions/userProfile';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchListDetails: () => dispatch(fetchListDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
