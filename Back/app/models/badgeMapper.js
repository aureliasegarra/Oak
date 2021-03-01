const Badge = require('./badge');

const db = require('../database');

const badgeMapper = {
    getAllBadges: async () => {
        const badges = await db.query('SELECT * FROM badge;');
        return badges.rows.map(badge => new Badge(badge));
    },
    getBadgeById: async (id) => {
        const query = 'SELECT * FROM badge WHERE id = $1;'
        const data = [id];
        const badges = await db.query(query,data);
        return badges.rows.map(badge => new Badge(badge));
    },
};

module.exports = badgeMapper;