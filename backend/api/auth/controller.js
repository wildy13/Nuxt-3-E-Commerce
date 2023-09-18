const passport = require('passport');
const { signToken } = require('./service');

const authLocal = async (req, res) => new Promise((resolve, reject) => {
    passport.authenticate('local', async (err, user, info) => {
      const error = err || info;
      if (error) {
        reject(new Error(error.message));
      }
      if (!user) {
        reject(new Error('Something went wrong, please try again'));
      }
  
      const {
        id,
        username,
      } = user; 
      const token = await signToken(
        id,
        username,
      );
  
      resolve({ token });
    })(req, res);
  });



const Login = async (req, res) => {
    try {
        const token = await authLocal(req,res);
        res.status(200).send(token)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {Login};;