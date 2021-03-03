const userMapper = require('../models/userMapper');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userMapper.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error)
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await userMapper.getUserById(id);
      res.json(user);
    } catch (error) {
      console.log(error)
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
