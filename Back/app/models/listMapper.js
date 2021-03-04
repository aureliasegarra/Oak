const List = require('./list');

const db = require('../database');

const listMapper = {
  getAllLists: async () => {
    try {
      const { rows } = await db.query('SELECT * FROM list;');
      if (!rows[0]) {
        throw new Error('There is no list');
      }
      return rows.map(list => new List(list));
    } catch (error) {
      throw new Error(error);
    }
  },
  getListsByUserId: async userId => {
    try {
      const query = ` SELECT  list.id,
                                    list.label,
                                    list.description,
                                    list.position,
                                    array_agg(book.id) AS livres
                            FROM list
                            JOIN "user" ON list.user_id = "user".id
                            JOIN "role" ON role.id = "user".role_id
                            JOIN list_has_book ON list_has_book.list_id = "list".id
                            JOIN book ON book.id = list_has_book.book_id
                            WHERE "user".id = $1
                            GROUP BY list.id;`;
      const data = [userId];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(
          `The list with for given user id ${userId} was not found`
        );
      }
      return rows.map(list => new List(list));
    } catch (error) {
      throw new Error(error);
    }
  },
  getListById: async id => {
    try {
      const query = ` SELECT *
                            FROM list
                            WHERE id = $1;`;
      const data = [id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The list with the given id ${id} was not found`);
      }
      return new List(rows[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
  addList: async list => {
    try {
      const { label, description, position, user_id } = list;
      const query = ` INSERT INTO list (label, description, "position", "user_id")
                            VALUES ($1::text, $2::text, $3::integer, $4::integer)
                            RETURNING id;`;
      const data = [label, description, position, user_id];
      const { rows } = await db.query(query, data);
      list.id = rows[0].id;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteListById: async id => {
    try {
      const query = ` DELETE FROM list
                            WHERE id = $1;`;
      const data = [id];
      const { rows } = await db.query(query, data);
      // if (!rows[0]) {
      //     throw new Error(`No list with the id ${id}`);
      // }
      console.log(rows);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateList: async list => {
    try {
      const { id, label, description, position } = list;
      const query = ` UPDATE list
                            SET
                            label = $1::text,
                            description = $2::text,
                            "position" = $3::integer
                            WHERE id = $4
                            RETURNING *;`;
      const data = [label, description, position, id];
      const { rows } = await db.query(query, data);
      if (!rows[0]) {
        throw new Error(`The list with the given id ${id} was not found`);
      }
      return new List(rows[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = listMapper;
