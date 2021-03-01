const List = require('./list');

const db = require('../database');

const listMapper = {
    getAllLists: async () => {
        const lists = await db.query('SELECT * FROM list;');
        return lists.rows.map(list => new List(list));
    },
    getListById: async (id) => {
        const query = 'SELECT * FROM list WHERE id = $1;'
        const data = [id];
        const lists = await db.query(query,data);
        return lists.rows.map(list => new List(list));
    },
};

module.exports = listMapper;