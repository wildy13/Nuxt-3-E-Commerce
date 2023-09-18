const { createUser, getUsers, editUsers, deleteUsers, getMe } = require("./controller");

const { verifyToken } = require('../auth/service');

const users = async (fastify) => {
  /* POST */
  fastify.route({
    method: 'POST',
    url: '/',
    handler: createUser,
    
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
    handler: getUsers,
    beforeHandler:[verifyToken],
  });

    /* GET */
    fastify.route({
      method: 'GET',
      url: '/me',
      handler: getMe
    });

  /* PUT */
  fastify.route({
    method: 'PUT',
    url: '/:id',
    handler: editUsers
  })
};

module.exports = users;
