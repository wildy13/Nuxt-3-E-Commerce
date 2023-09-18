const user = require('./api/user')

const router = (fastify) => {
    fastify.register(user, { prefix: 'api/user'})
}

module.exports = router