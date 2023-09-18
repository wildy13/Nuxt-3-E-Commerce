const { createUser, getUsers } = require("./controller");

const users = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/',
    handler: createUser
  });

  fastify.route({
    method: 'GET',
    url: '/',
    handler: getUsers
  });

};

module.exports = users;
