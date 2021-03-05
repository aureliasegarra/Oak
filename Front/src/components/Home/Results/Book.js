import React from 'react';
import PropTypes from 'prop-types';
import bookDefaultImg from './bookDefaultImg.png';

const Book = ({ volumeInfo }) => (
  <article className="book-card">
    <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : bookDefaultImg} alt="illustration" />
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
