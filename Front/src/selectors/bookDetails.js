// eslint-disable-next-line no-unused-vars
export const readListId = (lists = []) => {
  if (lists.length > 0) {
    const listId = lists.find(
      (list) => list.label === 'Lus',
    );
    return listId.id;
  }
  return 0;
};
// eslint-disable-next-line no-unused-vars
export const toReadListId = (lists = []) => {
  if (lists.length > 0) {
    const listId = lists.find(
      (list) => list.label === 'A lire',
    );
    return listId.id;
  }
  return 1;
};
