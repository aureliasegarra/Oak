class BookPosition {
    id;
    position;
    user_id;
    book_id;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = BookPosition;