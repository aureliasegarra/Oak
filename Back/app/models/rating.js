class Rating {
  id;

  rating;

  book_id;

  user_id;

  constructor(data) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }
}

module.exports = Rating;
