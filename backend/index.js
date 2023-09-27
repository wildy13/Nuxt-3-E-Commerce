const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');
const jwt = require('@fastify/jwt');
const router = require('./router');

const fastify = Fastify();
fastify.register(fastifyCors, {
  origin: '*',
  methods: 'GET, PUT, POST, DELETE',
});
  fastify.register(jwt, { secret: process.env.SESSION_KEY, sign: { expiresIn: '8h' } });

  fastify.addHook('onRequest', async (req, res) => {
    try {
      if (req.headers.authorization) {
        await req.jwtVerify();
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
fastify.register(router); 
const { sequelize, config: { host, port } } = require('./config');

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection has been estabilished successfully')
    } catch (error) {
        console.log(error)
    }
}


const start = async () => {
    try {
        fastify.listen ({ port, host }, () => console.log(`Server Running on Port ${port}`));
        await connect();
    } catch (error) {
        console.log(error)
    }
}

start()