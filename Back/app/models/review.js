class Review {
  id;

  label;

  publish_time;

  book_id;

  user_id;

  constructor(data) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }
}

module.exports = Review;
