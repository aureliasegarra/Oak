import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ volumeInfo }) => (
  <article>
    <img src={volumeInfo.imageLinks.thumbnail} alt="illustration" />
    <div>
      <h2>{volumeInfo.title}</h2>
      <h3>{volumeInfo.authors}</h3>
    </div>
    <p>Book</p>
  </article>
);

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Book;
