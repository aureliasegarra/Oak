const bookPositionMapper = require('../models/bookPositionMapper');

const bookPositionController = {
  getAllBookPositions: async (req, res) => {
    try {
      const bookPositions = await bookPositionMapper.getAllBookPositions();
      res.json(bookPositions);
    } catch (error) {
      console.log(error);
    }
  },
  getBookPositionById: async (req, res) => {
    const { id } = req.params;
    try {
      const bookPosition = await bookPositionMapper.getBookPositionById(id);
      res.json(bookPosition);
    } catch (error) {
      console.log(error);
    }
  },
  addBookPosition: async (req, res) => {
    res.send('Hello world !');
  },
  deleteBookPosition: async (req, res) => {
    res.send('Hello world !');
  },
  updateBookPosition: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = bookPositionController;
