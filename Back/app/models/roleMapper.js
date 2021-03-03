const Role = require('./role');

const db = require('../database');

const roleMapper = {
    getAllRoles: async () => {
        try {
            const roles = await db.query('SELECT * FROM role;');
            return roles.rows.map(role => new Role(role));
        } catch (error) {
            console.log(error)
        }
    },
    getRoleById: async (id) => {
        try {
            const query = 'SELECT * FROM role WHERE id = $1;'
            const data = [id];
            const roles = await db.query(query,data);
            return roles.rows.map(role => new Role(role));
        } catch (error) {
            console.log(error)
        }
    },
};

module.exports = roleMapper;