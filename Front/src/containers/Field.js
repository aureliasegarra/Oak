import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeInputValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = changeInputValue(value, ownProps.name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
