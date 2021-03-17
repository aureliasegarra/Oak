import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
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
    setLabelComment('');
  };

  const handleRatingChange = (event, newValue) => {
    setMyRating(newValue);
    sendRating(newValue, bookAPIId, id);
    setIsRatingModalOpen(!isRatingModalOpen);
  };

  const handleOnClick = () => {
    toast.success('📚 Livre ajouté à la liste \'Lus\'', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addToReadList(book.id, book.volumeInfo.title, readListId);
  };

  const handleOnSecondClick = () => {
    toast.success('📚 Livre ajouté à la liste \'A lire\'', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          <Helmet>
            <title>{`${book.volumeInfo.title} par ${book.volumeInfo.authors} | Oak`}</title>
            <meta name="description" content={`Découvrez le livre ${book.volumeInfo.title} par ${book.volumeInfo.authors}`} />
          </Helmet>
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
              <button onClick={handleOnSecondClick} type="submit" className="book-page__button">À lire</button>
              <button onClick={handleOnClick} type="submit" className="book-page__button">Lu</button>
              <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="toast-color"
              />
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
              {rating ? (
                <Rating value={rating} readOnly />
              )
                : (
                  <p>Soyez le premier à noter ce livre</p>
                )}
            </div>
            {isLogged && (
              <div className="book-page__rating-modal">
                {!isRatingModalOpen ? (
                  <button type="button" className="book-page__rating__button" onClick={handleRatingClick}>Noter</button>
                ) : (
                  <Rating
                    name="simple-controlled"
                    value={myRating}
                    onChange={handleRatingChange}
                  />
                )}
              </div>
            )}
          </section>

          <section className="book-page__synopsis">
            <p className="book-page__synopsis-title">Résumé</p>
            <p className="book-page__synopsis-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.volumeInfo.description) }} />
          </section>

          <section className="book-page__comments">
            <div className="book-page__comments-header">
              <p className="book-page__comments-title">Avis</p>
              {isLogged && (
                <>
                  {!isCommentModalOpen ? (
                    <button type="button" className="book-page__comment__button" onClick={handleCommentClick}>Commenter</button>
                  ) : (
                    <form className="book-page__comment-modal" onSubmit={handleCommentSubmit}>
                      <textarea className="book-page__comment-modal-input" value={labelComment} onChange={handleCommentChange} />
                      <button className="book-page__comment-modal-btn" type="submit">Envoyer</button>
                    </form>
                  )}
                </>
              )}
            </div>
            <div className="book-page__comments-container">
              {(reviews.length > 0) ? (
                reviews.map((review) => (
                  <div className="book-page__comment">
                    <div className="book-page__comment-infos">
                      <FaUserCircle className="book-page__comment-icon" />
                      <p className="book-page__comment-user">par {review.username}</p>
                    </div>
                    <p className="book-page__comment-date">le {`${review.publish_time.split('T')[0].split('-').reverse().join(' ')} à ${review.publish_time.split('T')[1].slice(0, 5)}`}</p>
                    <p className="book-page__comment-text">{review.label}</p>
                  </div>
                ))
              ) : (
                <p>Soyez le premier à commenter ce livre</p>
              )}
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
  rating: null,
  reviews: [],
};

export default BookDetails;
