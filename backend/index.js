const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');
const router = require('./router');

const fastify = Fastify({ logger: true});
fastify.register(fastifyCors, {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
  });

fastify.register(router); 
const { sequelize, config: { host, port } } = require('./config');

const User = require('./api/user/model')

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
        //User.sync({force:true})
        fastify.listen ({ port, host }, () => console.log(`Server Running on Port ${port}`));
        await connect();
    } catch (error) {
        console.log(error)
    }
}

start()