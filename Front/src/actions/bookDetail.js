export const SEND_COMMENT = 'SEND_COMMENT';

export const sendComment = (labelComment, bookAPIId, bookGoogleId) => ({
  type: SEND_COMMENT,
  labelComment,
  bookAPIId,
  bookGoogleId,
});

export const SEND_RATING = 'SEND_RATING';

export const sendRating = (rating, bookAPIId, bookGoogleId) => ({
  type: SEND_RATING,
  rating,
  bookAPIId,
  bookGoogleId,
});

export const SAVE_BOOK_TO_DB = 'SAVE_BOOK_TO_DB';

export const saveBookToDB = (bookGoogleId, bookTitle) => ({
  type: 'SAVE_BOOK_TO_DB',
  bookGoogleId,
  bookTitle,
});

export const SAVE_BOOK_ID = 'SAVE_BOOK_ID';

export const saveBookId = (id) => ({
  type: 'SAVE_BOOK_ID',
  id,
});
