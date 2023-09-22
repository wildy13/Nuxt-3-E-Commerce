const { create, get } = require("./controller");

const category = async (fastify) => {
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
  
  module.exports = category;
  