import { connect } from 'react-redux';
import Search from 'src/components/Home/Search';
import { setInputValue, fetchData } from 'src/actions/search';

const mapStateToProps = (state) => ({
  inputValue: state.search.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
  onSubmitForm: () => {
    const action = fetchData();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
