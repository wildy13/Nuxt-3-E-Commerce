const user = require('./api/user')
const auth = require('./api/auth')
const product = require('./api/product')
const category = require('./api/category')

const route = async (fastify) => {
    fastify.register(user, { prefix: 'api/user'})
    fastify.register(auth, { prefix: 'api/auth'})
    fastify.register(product, { prefix: 'api/product'})
    fastify.register(category, { prefix: 'api/category'})
};

module.exports = route