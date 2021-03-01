const Role = require('./role');

const db = require('../database');

const roleMapper = {
    getAllRoles: async () => {
        const roles = await db.query('SELECT * FROM role;');
        return roles.rows.map(role => new Role(role));
    },
    getRoleById: async (id) => {
        const query = 'SELECT * FROM role WHERE id = $1;'
        const data = [id];
        const roles = await db.query(query,data);
        return roles.rows.map(role => new Role(role));
    },
};

module.exports = roleMapper;