const listMapper = require('../models/listMapper');

const listController = {
  getAllLists: async (req, res) => {
    try {
      const lists = await listMapper.getAllLists();
      res.json(lists);
    } catch (error) {
      console.log(error)
    }
  },
  getListById: async (req, res) => {
    const { id } = req.params;
    try {
      const list = await listMapper.getListById(id);
      res.json(list);
    } catch (error) {
      console.log(error)
    }
  },
  addList: async (req, res) => {
    res.send('Hello world !');
  },
  deleteList: async (req, res) => {
    res.send('Hello world !');
  },
  updateList: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = listController;
