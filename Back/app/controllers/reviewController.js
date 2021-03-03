const reviewMapper = require('../models/reviewMapper');

const reviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await reviewMapper.getAllReviews();
      res.json(reviews);
    } catch (error) {
      console.log(error)
    }
  },
  getReviewById: async (req, res) => {
    const { id } = req.params;
    try {
      const review = await reviewMapper.getReviewById(id);
      res.json(review);
    } catch (error) {
      console.log(error)
    }
  },
  addReview: async (req, res) => {
    res.send('Hello world !');
  },
  deleteReview: async (req, res) => {
    res.send('Hello world !');
  },
  updateReview: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = reviewController;
