const User = require('../user/model');
const { setup } = require('./passport');
const { Login } = require('./controller');
const { getMe } = require('../user/controller');

setup(User);


// POST Router
const login = async (fastify) =>  {
    /* POST */
  fastify.route({
    method: 'POST',
    url: '/login',    
    handler: Login,     
  });
/* GET */
  fastify.route({
    method: 'GET',
    url: '/session',    
    handler: getMe,     
  });
}



module.exports = login;