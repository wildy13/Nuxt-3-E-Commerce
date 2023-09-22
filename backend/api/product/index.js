const { create, get } = require("./controller");

const product = async (fastify) => {
    fastify.route({
      method: "POST",
      url: "/",
      handler: create,
    });
  
    fastify.route({
      method: "GET",
      url: "/",
      handler: get,
    });
  };
  
  module.exports = product;