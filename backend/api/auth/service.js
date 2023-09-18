const jwt = require('jsonwebtoken');
const { fastifyJwt } = require('@fastify/jwt');
const Fastify = require('fastify')
const fastify = Fastify();
const {
  config: { secret },
} = require('../../config');

const verifyToken = async (request, reply) => {
    try {
        fastify.register(fastifyJwt, {
            secret: secret.session,
            algorithms: ['HS256'],
            credentialsRequired: true,
            getToken: function fromHeaderOrQuerystring(req) {
                if (
                  req.headers.authorization
                  && req.headers.authorization.split(' ')[0] === 'Bearer'
                ) {
                  return req.headers.authorization.split(' ')[1];
                }
                if (req.query && req.query.token) {
                  return req.query.token;
                }
                return null;
              },
        })
      console.log('Token berhasil diverifikasi');
    } catch (error) {
      console.error('Gagal verifikasi token:', error);
      reply.status(401).send({ error: 'Token tidak valid' });
    }
  };
  

const signToken = (
  id,
  username,
) => jwt.sign(
  {
    id, username, 
  },
  secret.session,
  {
    expiresIn: 60 * 60 * 5,
  },
);

module.exports = {
  signToken, verifyToken
};