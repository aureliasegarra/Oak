const userMapper = require('../models/userMapper');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userMapper.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userMapper.getUserById(id);
      res.json(user);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  addUser: async (req, res) => {
    res.send('Hello world !');
  },
  deleteUser: async (req, res) => {
    res.send('Hello world !');
  },
  updateUser: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = userController;
