const User = require("../user/model");
const { setup } = require("./passport");
const { Login, logout } = require("./controller");
const { getMe } = require("../user/controller");

setup(User);

const login = async (fastify) => {
  /* POST */

  fastify.route({
    method: "POST",
    url: "/login",
    handler: Login,
  });

  fastify.route({
    method: "POST",
    url: "/logout",
    handler: logout,
  });

  /* GET */
  fastify.route({
    method: "GET",
    url: "/session",
    handler: getMe,
  });
};

module.exports = login;
