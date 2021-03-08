const badgeMapper = require('../models/badgeMapper');

const badgeController = {
  getAllBadges: async (req, res) => {
    try {
      const badges = await badgeMapper.getAllBadges();
      res.json(badges);
    } catch (error) {
      console.log(error);
    }
  },
  getBadgeById: async (req, res) => {
    const { id } = req.params;
    try {
      const badge = await badgeMapper.getBadgeById(id);
      res.json(badge);
    } catch (error) {
      console.log(error);
    }
  },
  addBadge: async (req, res) => {
    res.send('Hello world !');
  },
  deleteBadge: async (req, res) => {
    res.send('Hello world !');
  },
  updateBadge: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = badgeController;
