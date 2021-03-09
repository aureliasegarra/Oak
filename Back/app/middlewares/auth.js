const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json('Access denied. No token provided');
  try {
    const decodedPayload = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decodedPayload;
    next();
  } catch (error) {
    res.status(400).json('Invalid token.');
  }
}

module.exports = auth;
