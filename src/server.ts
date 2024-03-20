import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app.listen(
  {
    port: 3100,
  },
  (): void => console.log("Server is running on port 3100")
);
