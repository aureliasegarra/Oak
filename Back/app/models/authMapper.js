const User = require('./user');

const db = require('../database');

const authMapper = {
  getUserByEmail: async (email) => {
    try {
      const query = 'SELECT * FROM "user" WHERE email = $1;';
      const data = [email];
      const { rows } = await db.query(query, data);
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  },
  register: async (newUser) => {
    try {
      const { username, email, password, avatar } = newUser;
      const queryUser = `INSERT INTO public."user" (
        username, email, password, avatar, role_id) VALUES (
        $1::text, $2::text, $3::text, $4::integer, '2'::integer)
         returning id, role_id;`;
      const dataUser = [username, email, password, avatar];
      const { rows } = await db.query(queryUser, dataUser);
      newUser.id = rows[0].id;
      newUser.role_id = rows[0].role_id;
      // Create two default lists
      const queryList = `INSERT INTO public.list (label, description, "position", user_id) VALUES
      ('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, $1::integer),
      ('À lire'::text, 'Les livres que je veux lire'::text, '1'::integer, $1::integer)
         returning id;`;
      const dataList = [newUser.id];
      await db.query(queryList, dataList);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authMapper;
