// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Page from 'src/components/Page';
import Search from 'src/containers/Search';
import Header from './Header';
import News from './News';
import Loading from './Loading';

// == Import
import './styles.scss';

// == Composant
const Home = ({ fetchResults, loading, results }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const submitForm = () => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchResults();
    }
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Page>
      <Header />
      <Search
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onSubmitForm={submitForm}
      />
      {results.length > 0 && (
        <Redirect to="/results" />
      )}
      {!results && (
        <Redirect to="/error" />
      )}
      <News />
    </Page>
  );
};

Home.propTypes = {
  fetchResults: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  results: PropTypes.array.isRequired,
};

Home.defaultProps = {
  loading: false,
};
// == Export
export default Home;
