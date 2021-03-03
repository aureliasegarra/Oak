import { connect } from 'react-redux';
import Search from 'src/components/Home/Search';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: () => {
    console.log('je veux changer la valeur de linput');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
