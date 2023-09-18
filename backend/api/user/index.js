const { createUser, getUsers, editUsers, deleteUsers } = require("./controller");

const users = async (fastify) => {
  /* POST */
  fastify.route({
    method: 'POST',
    url: '/',
    handler: createUser
  });
  
  fastify.route({
    method: 'POST',
    url:'/delete',
    handler: deleteUsers
  })

  /* GET */
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getUsers
  });

  /* PUT */
  fastify.route({
    method: 'PUT',
    url: '/:id',
    handler: editUsers
  })
};

module.exports = users;
