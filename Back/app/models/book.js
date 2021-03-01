class Book {
    id;
    title;
    year;
    page;
    synopsis;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Book;