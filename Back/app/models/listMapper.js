const List = require('./list');

const db = require('../database');

const listMapper = {
  getAllLists: async () => {
    try {
      const { rows } = await db.query('SELECT * FROM list;');
      if (!rows[0]) {
        throw new Error('There is no list');
      }
      return rows.map((list) => new List(list));
    } catch (error) {
      throw new Error(error);
    }
  },
  getListById: async (id) => {
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
  addList: async (list) => {
    try {
      const { label, description, user_id } = list;
      const query = ` INSERT INTO public.list (label, description,  "user_id")
      VALUES
      ($1::text, $2::text, $3::integer) RETURNING id,position;`;
      const data = [label, description, user_id];
      const { rows } = await db.query(query, data);
      list.id = rows[0].id;
      list.position = rows[0].position;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteListById: async (id) => {
    try {
      const query = ` DELETE FROM list
                            WHERE id = $1;`;
      const data = [id];
      await db.query(query, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateList: async (list) => {
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
