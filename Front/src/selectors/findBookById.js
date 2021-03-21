// function to return the book of the list which will have the same id
// eslint-disable-next-line import/prefer-default-export
export const findBookById = (results = [], id) => results.find(
  (result) => result.id === id,
);
