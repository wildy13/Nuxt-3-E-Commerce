const user = require('./api/user')

const route = async (fastify) => {
    fastify.register(user, { prefix: 'api/user'})
};

module.exports = route