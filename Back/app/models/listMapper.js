const List = require('./list');

const db = require('../database');

const listMapper = {
    getAllLists: async () => {
        try {
            const lists = await db.query('SELECT * FROM list;');
            return lists.rows.map(list => new List(list));
        } catch (error) {
            console.log(error)
        }
    },
    getListById: async (id) => {
        try {
            const query = 'SELECT * FROM list WHERE id = $1;'
            const data = [id];
            const lists = await db.query(query,data);
            return lists.rows.map(list => new List(list));
        } catch (error) {
            console.log(error)
        }
    },
};

module.exports = listMapper;