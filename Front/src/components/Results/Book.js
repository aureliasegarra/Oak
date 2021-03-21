import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bookDefaultImg from 'src/assets/images/bookDefaultImg.png';

const Book = ({ volumeInfo, id }) => (
  <article className="book-card">
    <img className="book-card__image" src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : bookDefaultImg} alt="illustration" />
    <div className="book-card__info">
      <h2 className="book-card__title">{volumeInfo.title.split(' ').splice(0, 8).join(' ')}</h2>
      <h3 className="book-card__author">
        {volumeInfo.authors && volumeInfo.authors.map((author) => (
          <p key={author}>{author.split('').splice(0, 25).join('')}...</p>
        ))}
      </h3>
      <Link to={`/book/${id}`} className="book-card__link">Détails</Link>
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
  id: PropTypes.string.isRequired,
};

export default Book;
