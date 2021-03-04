import { connect } from 'react-redux';
import Field from 'src/components/Login/Field';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
