const jwt = require('jsonwebtoken');
const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      //Attaching User Information to Request Object:
      //The crucial line req.user = user attaches the verified user information to the req object. 
      //This object represents the incoming request and is accessible throughout the request-response cycle.
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
    authenticateJwt,
    SECRET
}
