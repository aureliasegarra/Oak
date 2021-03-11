const db = require('../database');

const listHasbookMapper = {
  addBookToList: async (newBook) => {
    try {
      const { id, list_id, user_id } = newBook;
      const queryList = ` INSERT INTO public.list_has_book (book_id, list_id)
                      VALUES ($1::integer, $2::integer)
                      returning id;`;
      const dataList = [id, list_id];
      await db.query(queryList, dataList);
      const queryBookPosition = ` INSERT INTO public.book_position ("position", book_id, user_id)
                                  VALUES ('0'::integer, $1::integer, $2::integer)
                                  returning id;`;
      const dataBookPosition = [id, user_id];
      await db.query(queryBookPosition, dataBookPosition);
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteBookFromList: async (list_has_book) => {
    const { book_id, list_id, user_id } = list_has_book;
    try {
      // We delete the book from the list
      const queryListHasBook = ` DELETE FROM list_has_book
                            WHERE book_id = $1 AND list_id = $2;`;
      // We delete the book position
      const queryBookPosition = ` DELETE FROM book_position
                                  WHERE book_id = $1 AND user_id = $2;`;
      const dataListHasBook = [book_id, list_id];
      const dataBookPosition = [book_id, user_id];
      await db.query(queryListHasBook, dataListHasBook);
      await db.query(queryBookPosition, dataBookPosition);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = listHasbookMapper;
