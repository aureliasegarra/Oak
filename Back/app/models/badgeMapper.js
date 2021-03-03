const Badge = require('./badge');

const db = require('../database');

const badgeMapper = {
    getAllBadges: async () => {
        try {
            const badges = await db.query('SELECT * FROM badge;');
            return badges.rows.map(badge => new Badge(badge));
        } catch (error) {
            console.log(error);
        }
    },
    getBadgeById: async (id) => {
        try {
            const query = 'SELECT * FROM badge WHERE id = $1;'
            const data = [id];
            const badges = await db.query(query,data);
            return badges.rows.map(badge => new Badge(badge));
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = badgeMapper;