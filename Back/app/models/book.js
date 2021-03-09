class Book {
  id;

  title;

  public_api_id;

  constructor(data) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }
}

module.exports = Book;
