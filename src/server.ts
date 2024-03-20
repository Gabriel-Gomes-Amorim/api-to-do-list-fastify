import fastify, { FastifyInstance } from "fastify";
import { taskRoutes } from "./routes/task.routes";

const app: FastifyInstance = fastify();

app.register(taskRoutes, {
  prefix: "/task",
});

app.listen(
  {
    port: 3100,
  },
  (): void => console.log("Server is running on port 3100")
);
