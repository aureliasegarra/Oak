const ratingMapper = require('../models/ratingMapper');

const ratingController = {
  getAllRatings: async (req, res) => {
    try {
      const ratings = await ratingMapper.getAllRatings();
      res.json(ratings);
    } catch (error) {
      console.log(error)
    }
  },
  getRatingById: async (req, res) => {
    const { id } = req.params;
    try {
      const rating = await ratingMapper.getRatingById(id);
      res.json(rating);
    } catch (error) {
      console.log(error)
    }
  },
  addRating: async (req, res) => {
    res.send('Hello world !');
  },
  deleteRating: async (req, res) => {
    res.send('Hello world !');
  },
  updateRating: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = ratingController;
