export const SEND_COMMENT = 'SEND_COMMENT';

export const sendComment = (labelComment, bookAPIId, bookGoogleId) => ({
  type: SEND_COMMENT,
  labelComment,
  bookAPIId,
  bookGoogleId,
});
