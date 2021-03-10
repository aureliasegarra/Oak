import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiStarSFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import bookDefaultImg from './bookDefaultImg.png';

import './styles.scss';

const BookDetails = ({
  result,
  addToReadList,
  addToToReadList,
  readListId,
  toReadListId,
}) => {
  const handleOnClick = () => {
    addToReadList(result.id, result.volumeInfo.title, readListId);
  };

  const handleOnSecondClick = () => {
    addToToReadList(result.id, result.volumeInfo.title, toReadListId);
  };

  return (
    <article className="book-page">

      <section className="book-page__presentation">
        <div className="book-page__image">
          <img src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : bookDefaultImg} alt="illustration" />
        </div>
        <div className="book-page__info">
          <h2 className="book-page__title">{result.volumeInfo.title}</h2>
          <h3 className="book-page__author">{result.volumeInfo.authors}</h3>
          <p className="book-page__text">{result.volumeInfo.publishedDate}</p>
          <p className="book-page__text">{result.volumeInfo.pageCount} pages</p>
        </div>
        <div className="book-page__buttons">
          <button onClick={handleOnClick} type="submit" className="book-page__button">Lu</button>
          <button onClick={handleOnSecondClick} type="submit" className="book-page__button">À lire</button>
        </div>
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
        <p className="book-page__synopsis-text">{result.volumeInfo.description}</p>
      </section>

      <section className="book-page__comments">
        <div className="book-page__comment">comments</div>
        <div className="book-page__comment">comments</div>
        <div className="book-page__comment">comments</div>
      </section>

    </article>
  );
};

BookDetails.propTypes = {
  result: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.array,
      publishedDate: PropTypes.string,
      description: PropTypes.string,
      pageCount: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addToReadList: PropTypes.func.isRequired,
  addToToReadList: PropTypes.func.isRequired,
  readListId: PropTypes.number.isRequired,
  toReadListId: PropTypes.number.isRequired,

};

export default BookDetails;
