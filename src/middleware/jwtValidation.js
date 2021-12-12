const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ status: StatusCodes.UNAUTHORIZED, message: 'Token not found' }); 
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;  
    return next();
  } catch (err) {
    return next({ status: StatusCodes.UNAUTHORIZED, message: 'Expired or invalid token' }); 
  }
};

module.exports = validateToken;