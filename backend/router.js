const user = require('./api/user')
const auth = require('./api/auth')
const product = require('./api/product')
const category = require('./api/category')
const carts = require('./api/carts')
const cart_items = require('./api/cart_items')
const role = require('./api/role')

const route = async (fastify) => {
    fastify.register(user, { prefix: 'api/user'})
    fastify.register(auth, { prefix: 'api/auth'})
    fastify.register(product, { prefix: 'api/product'})
    fastify.register(category, { prefix: 'api/category'})
    fastify.register(carts, { prefix: 'api/carts'})
    fastify.register(cart_items, { prefix: 'api/cart_items'})
    fastify.register(role, { prefix: 'api/role'})
};

module.exports = route