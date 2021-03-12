const Rating = require('../models/rating');
const ratingMapper = require('../models/ratingMapper');

const ratingController = {
  getAllRatings: async (req, res) => {
    try {
      const ratings = await ratingMapper.getAllRatings();
      res.json(ratings);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  getRatingById: async (req, res) => {
    const { id } = req.params;
    try {
      const rating = await ratingMapper.getRatingById(id);
      res.json(rating);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addRating: async (req, res) => {
    try {
      req.body.user_id = req.user.id;
      const newRating = new Rating(req.body);
      await ratingMapper.addRating(newRating);
      res.status(201).json(newRating);
    } catch (error) {
      res.status(403).json(error.message);
      console.log(error);
    }
  },
  deleteRatingById: async (req, res) => {
    const { id } = req.params;
    try {
      await ratingMapper.deleteRatingById(id);
      res.json('OK');
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  updateRating: async (req, res) => {
    try {
      const rating = new Rating(req.body);
      const ratingUpdated = await ratingMapper.updateRating(rating);
      res.json(ratingUpdated);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
};

module.exports = ratingController;
