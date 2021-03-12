import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Rating } from '@material-ui/lab';
import bookDefaultImg from './bookDefaultImg.png';

import './styles.scss';

const BookDetails = ({
  isLogged,
  book,
  rating,
  reviews,
  addToReadList,
  addToToReadList,
  readListId,
  toReadListId,
  fetchBookDetail,
  fetchBookReviews,
  sendComment,
  sendRating,
  id,
  bookAPIId,
}) => {
  useEffect(() => {
    fetchBookDetail(id);
    fetchBookReviews(id);
  }, []);

  const [labelComment, setLabelComment] = useState('');
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [myRating, setMyRating] = useState(0);

  const handleCommentChange = (event) => {
    setLabelComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    sendComment(labelComment, bookAPIId, id);
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const handleRatingChange = (event, newValue) => {
    setMyRating(newValue);
    sendRating(newValue, bookAPIId, id);
    setIsRatingModalOpen(!isRatingModalOpen);
  };

  const handleOnClick = () => {
    addToReadList(book.id, book.volumeInfo.title, readListId);
  };

  const handleOnSecondClick = () => {
    addToToReadList(book.id, book.volumeInfo.title, toReadListId);
  };

  const handleCommentClick = () => {
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const handleRatingClick = () => {
    setIsRatingModalOpen(!isRatingModalOpen);
  };

  return (
    <article className="book-page">

      {book.volumeInfo && (
        <>
          <section className="book-page__presentation">
            <div className="book-page__image">
              <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : bookDefaultImg} alt="illustration" />
            </div>
            <div className="book-page__info">
              <h2 className="book-page__title">{book.volumeInfo.title}</h2>
              <h3 className="book-page__author">{book.volumeInfo.authors}</h3>
              <p className="book-page__text">{book.volumeInfo.publishedDate}</p>
              <p className="book-page__text">{book.volumeInfo.pageCount} pages</p>
            </div>
            {isLogged && (
            <div className="book-page__buttons">
              <button onClick={handleOnClick} type="submit" className="book-page__button">Lu</button>
              <button onClick={handleOnSecondClick} type="submit" className="book-page__button">À lire</button>
            </div>
            )}
            <div className="book-page__outButtons">
              <Link to="/results">
                <AiFillCloseCircle className="book-page__outButton" />
              </Link>
            </div>
          </section>

          <section className="book-page__notes">
            <div className="book-page__container-stars">
              <Rating value={rating} readOnly />
            </div>
            {isLogged && (
              <>
                {!isRatingModalOpen ? (
                  <button type="button" className="book-page__rating__button" onClick={handleRatingClick}>Noter</button>
                ) : (
                  <Rating
                    name="simple-controlled"
                    value={myRating}
                    onChange={handleRatingChange}
                  />
                )}
              </>
            )}
          </section>

          <section className="book-page__synopsis">
            <p className="book-page__synopsis-title">Résumé</p>
            <p className="book-page__synopsis-text">{book.volumeInfo.description}</p>
          </section>

          <section className="book-page__comments">
            <p className="book-page__comments-title">Avis</p>
            {isLogged && (
              <>
                {!isCommentModalOpen ? (
                  <button type="button" className="book-page__comment__button" onClick={handleCommentClick}>Commenter</button>
                ) : (
                  <form onSubmit={handleCommentSubmit}>
                    <input type="text" value={labelComment} onChange={handleCommentChange} />
                    <button type="submit">Envoyer</button>
                  </form>
                )}
              </>
            )}
            <div className="book-page__comments-container">
              {reviews && reviews.map((review) => (
                <div className="book-page__comment">{review.label}</div>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
};

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.object,
  isLogged: PropTypes.bool.isRequired,
  addToReadList: PropTypes.func,
  addToToReadList: PropTypes.func,
  readListId: PropTypes.number,
  toReadListId: PropTypes.number,
  fetchBookDetail: PropTypes.func,
  rating: PropTypes.number,
  reviews: PropTypes.array,
};

BookDetails.defaultProps = {
  addToReadList: () => {},
  addToToReadList: () => {},
  readListId: 0,
  toReadListId: 1,
  fetchBookDetail: () => {},
  book: {},
  rating: 3,
  reviews: [],
};

export default BookDetails;
