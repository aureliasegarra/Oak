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
