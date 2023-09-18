const User = require('../user/model');
const { setup } = require('./passport');
const { Login } = require('./controller');

setup(User);


// POST Router
const login = async (fastify) =>  {
    /* POST */
  fastify.route({
    method: 'POST',
    url: '/login',    
    handler: Login,     
  });
}



module.exports = login;