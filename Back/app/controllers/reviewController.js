const Review = require('../models/review');
const reviewMapper = require('../models/reviewMapper');

const reviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await reviewMapper.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  getReviewById: async (req, res) => {
    const { id } = req.params;
    try {
      const review = await reviewMapper.getReviewById(id);
      res.json(review);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addReview: async (req, res) => {
    try {
      const review = new Review(req.body);
      await reviewMapper.addReview(review);
      res.status(201).json(review);
    } catch (error) {
      res.status(403).json(error.message);
      console.log(error);
    }
  },
  deleteReviewById: async (req, res) => {
    const { id } = req.params;
    try {
      await reviewMapper.deleteReviewById(id);
      res.json('OK');
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  updateReview: async (req, res) => {
    try {
      const review = new Review(req.body);
      const reviewUpdated = await reviewMapper.updateReview(review);
      res.json(reviewUpdated);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
};

module.exports = reviewController;
