const Fastify = require("fastify");
const { createUser, getUsers } = require("./controller");
const fastify = Fastify();


fastify.post("/", async (request, reply) => {
  try {
    const newUser = await createUser(request.body); 
    console.log("Data pengguna yang baru dibuat:", newUser);
    reply.status(201).send(newUser);
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error" });
  }
});

fastify.get("/", async (request, reply) => {
  try {
    const users = await getUsers();
    console.log("Data users:", users);
    reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = fastify;
