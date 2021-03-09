import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bookDefaultImg from './bookDefaultImg.png';

const Book = ({ volumeInfo, id }) => (
  <article className="book-card">
    <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : bookDefaultImg} alt="illustration" />
    <div className="book-card__info">
      <h2 className="book-card__title">{volumeInfo.title}</h2>
      <h3>{volumeInfo.authors}</h3>
      <Link to={`/result/${id}`} className="book-card__link">Détails</Link>
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