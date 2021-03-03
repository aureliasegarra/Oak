export default (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};
