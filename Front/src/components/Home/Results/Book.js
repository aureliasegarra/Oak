import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ volumeInfo }) => (
  <article className="book-card">
    <img className="book-card__image" src={volumeInfo.imageLinks.thumbnail} alt="illustration" />
    <div>
      <h2 className="book-card__title">{volumeInfo.title}</h2>
      <h3>{volumeInfo.authors}</h3>
    </div>
  </article>
);

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default Book;
