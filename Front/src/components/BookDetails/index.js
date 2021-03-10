import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiStarSFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaShareSquare } from 'react-icons/fa';
import Loading from 'src/components/Loading';
import bookDefaultImg from './bookDefaultImg.png';

import './styles.scss';

const BookDetails = ({
  isLogged,
  book,
  addToReadList,
  addToToReadList,
  readListId,
  toReadListId,
  fetchBookDetail,
  id,
}) => {
  useEffect(() => {
    console.log('on est bon', id);
    fetchBookDetail(id);
  }, []);

  const handleOnClick = () => {
    addToReadList(book.id, book.volumeInfo.title, readListId);
  };

  const handleOnSecondClick = () => {
    addToToReadList(book.id, book.volumeInfo.title, toReadListId);
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
              <RiStarSFill className="book-page__stars" />
              <RiStarSFill className="book-page__stars" />
              <RiStarSFill className="book-page__stars" />
              <RiStarSFill className="book-page__stars" />
              <RiStarSFill className="book-page__stars" />
            </div>
          </section>

          <section className="book-page__synopsis">
            <p className="book-page__synopsis-title">Résumé</p>
            <p className="book-page__synopsis-text">{book.volumeInfo.description}</p>
          </section>

          <section className="book-page__comments">
            <div className="book-page__comment">comments</div>
            <div className="book-page__comment">comments</div>
            <div className="book-page__comment">comments</div>
          </section>
        </>
      )}
    </article>
  );
};

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  addToReadList: PropTypes.func,
  addToToReadList: PropTypes.func,
  readListId: PropTypes.number,
  toReadListId: PropTypes.number,
  fetchBookDetail: PropTypes.func,
};

BookDetails.defaultProps = {
  addToReadList: () => {},
  addToToReadList: () => {},
  readListId: 0,
  toReadListId: 1,
  fetchBookDetail: () => {},
};

export default BookDetails;
