require('dotenv').config();

const User = require('../user/model');


const isAuthenticated = () => async (req, res) => {
  if (!req.user) {
    res.status(401).send('Access Denied / Forbidden');
  } else {
    const user = await User.findOne({ username: req.user.username });

    if (!user) {
      res.status(401).send('Access Denied / Forbidden');
    }
  }
};


module.exports = { isAuthenticated };
