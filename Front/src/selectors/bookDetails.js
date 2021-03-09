// eslint-disable-next-line no-unused-vars
export const readListId = (lists = []) => {
  const listId = lists.find(
    (list) => list.label === 'Lus',
  );
  return listId.id;
};
// eslint-disable-next-line no-unused-vars
export const toReadListId = (lists = []) => {
  const listId = lists.find(
    (list) => list.label === 'A lire',
  );
  return listId.id;
};
