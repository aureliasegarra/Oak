export const readListId = (lists = []) => {
  if (lists.length > 0) {
    const listId = lists.find(
      (list) => list.label === 'Lus',
    );
    return listId.id;
  }
  return 0;
};

export const toReadListId = (lists = []) => {
  if (lists.length > 0) {
    const listId = lists.find(
      (list) => list.label === 'À lire',
    );
    return listId.id;
  }
  return 1;
};
