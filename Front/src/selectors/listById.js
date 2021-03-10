// function to return the book of the list which will have the same id
// eslint-disable-next-line import/prefer-default-export
export const findListById = (lists = [], id) => lists.find(
  (list) => list.id === id,
);
