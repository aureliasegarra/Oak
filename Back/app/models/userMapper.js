const User = require('./user');

const db = require('../database');

const userMapper = {
    getAllUsers: async () => {
        const users = await db.query('SELECT * FROM "user";');
        return users.rows.map(user => new User(user));
    },
    getUserById: async (id) => {
        const query = 'SELECT * FROM "user" WHERE id = $1;'
        const data = [id];
        const users = await db.query(query,data);
        return users.rows.map(user => new User(user));
    },
};

module.exports = userMapper;