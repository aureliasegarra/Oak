require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../models/user');
const authMapper = require('../models/authMapper');

const authController = {
  register: async (req, res) => {
    try {
      // we try to find the user in the db
      const user = await authMapper.getUserByEmail(req.body.email);
      // if the user already exist, we return a 400 error (Bad Request)
      if (user) return res.status(400).json('User already registered.');
      // we create an User object from the payload
      let newUser = new User(req.body);
      // we generate the salt
      const salt = await bcrypt.genSalt(10);
      // we salt the user password
      newUser.password = await bcrypt.hash(newUser.password, salt);
      // we insert the user into the db
      await authMapper.register(newUser);
      newUser = _.pick(newUser, [
        'id',
        'username',
        'email',
        'avatar',
        'role_id',
      ]);
      const token = jwt.sign(newUser, process.env.JWTPRIVATEKEY);
      // we send the user without his password and we add the generated token to the header
      res.status(201).json(newUser);
    } catch (error) {
      res.status(403).json(error.message);
      console.log(error);
    }
  },
  login: async (req, res) => {
    // we try to find the user in the db
    let user = await authMapper.getUserByEmail(req.body.email);
    // if the user does not exist, we return a 400 error (Bad Request)
    if (!user) return res.status(400).json('Invalid email or password');
    // we compare the given password from the payload with the stored password in the database
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // if the password is not valid, we return a 400 error
    if (!validPassword)
      return res.status(400).json('Invalid email or password');
    user = _.pick(user, ['id', 'username', 'email', 'avatar', 'role_id']);
    // we convert our User object without his password to a token
    const token = jwt.sign(user, process.env.JWTPRIVATEKEY);
    user.token = token;
    // we send the token to the client
    res.json(user);
  },
};

module.exports = authController;
