const authorMapper = require('../models/authorMapper');

const authorController = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await authorMapper.getAllAuthors();
      res.json(authors);
    } catch (error) {
      console.log(error)
    }
  },
  getAuthorById: async (req, res) => {
    const { id } = req.params;
    try {
      const author = await authorMapper.getAuthorById(id);
      res.json(author);
    } catch (error) {
      console.log(error)
    }
  },
  addAuthor: async (req, res) => {
    res.send('Hello world !');
  },
  deleteAuthor: async (req, res) => {
    res.send('Hello world !');
  },
  updateAuthor: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = authorController;
