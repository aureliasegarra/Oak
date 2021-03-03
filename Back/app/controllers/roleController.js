const roleMapper = require('../models/roleMapper');

const roleController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await roleMapper.getAllRoles();
      res.json(roles);
    } catch (error) {
      console.log(error)
    }
  },
  getRoleById: async (req, res) => {
    const { id } = req.params;
    try {
      const role = await roleMapper.getRoleById(id);
      res.json(role);
    } catch (error) {
      console.log(error)
    }
  },
  addRole: async (req, res) => {
    res.send('Hello world !');
  },
  deleteRole: async (req, res) => {
    res.send('Hello world !');
  },
  updateRole: async (req, res) => {
    res.send('Hello world !');
  },
};

module.exports = roleController;
