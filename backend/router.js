const user = require('./api/user')
const auth = require('./api/auth')

const route = async (fastify) => {
    fastify.register(user, { prefix: 'api/user'})
    fastify.register(auth, { prefix: 'api/auth'})
};

module.exports = route