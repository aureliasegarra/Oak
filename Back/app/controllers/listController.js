const List = require('../models/list');
const listMapper = require('../models/listMapper');

const listController = {
  getAllLists: async (req, res) => {
    try {
      const lists = await listMapper.getAllLists();
      res.json(lists);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  getListByUserId: async (req, res) => {
    const { userId } = req.params;
    try {
      const list = await listMapper.getListsByUserId(userId);
      res.json(list);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  getListById: async (req, res) => {
    const { id } = req.params;
    try {
      const list = await listMapper.getListById(id);
      res.json(list);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addList: async (req, res) => {
    try {
      const list = new List(req.body);
      await listMapper.addList(list);
      res.status(201).json(list)
    } catch (error) {
      res.status(403).json(err.message);
      console.log(error);
    }
  },
  deleteListById: async (req, res) => {
    const { id } = req.params;
    try {
      await listMapper.deleteListById(id);
      res.json('OK');
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  updateList: async (req, res) => {
    try {
      const list = new List(req.body);
      const listUpdated = await listMapper.updateList(list);
      res.json(listUpdated);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
};

module.exports = listController;
