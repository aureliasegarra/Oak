const User = require('./user');

const db = require('../database');

const userMapper = {
  getAllUsers: async () => {
    try {
      const users = await db.query('SELECT * FROM "user";');
      return users.rows.map((user) => new User(user));
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (id) => {
    try {
      const queryUser = `SELECT
      "user".id,
      "user".username,
      "user".email,
      "user".avatar,
      "role".role,
      array_agg(badge.label) AS badges
      FROM "user"
      JOIN "role" ON "role".id = "user".role_id
      JOIN user_has_badge ON user_has_badge.user_id = "user".id
      JOIN badge ON badge.id = user_has_badge.badge_id
      WHERE "user".id = $1 GROUP BY "user".id,"role".role;`;
      const data = [id];
      const users = await db.query(queryUser, data);
      const user = new User(users.rows[0]);
      const queryLists = `SELECT
      list.id,
      list.label,
      list.description,
      list.position
      FROM list
      WHERE "list".user_id IN
      (
        SELECT
        id
        FROM "user"
        WHERE "user".id = $1
        );`;
      const lists = await db.query(queryLists, data);
      user.lists = lists.rows;

      const queryBooks = `SELECT
      book.id,
      list_has_book.list_id,
      book.title,
      array_agg(author.full_name) AS authors
      FROM book
      JOIN book_has_author ON book_has_author.book_id = book.id
      JOIN author ON author.id = book_has_author.author_id
      JOIN list_has_book ON list_has_book.book_id = book.id
      JOIN list ON list.id = list_has_book.list_id
      WHERE list.user_id = $1
      GROUP BY book.id,list_has_book.list_id;`;
      const booksRows = await db.query(queryBooks, data);
      const books = booksRows.rows;
      user.lists.forEach((list) => {
        // On crée un table vide books sur chaque liste qui contiendra les livres de la liste
        list.books = [];
        books.forEach((book) => {
          if (book.list_id === list.id) {
            list.books.push(book);
          }
        });
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userMapper;
