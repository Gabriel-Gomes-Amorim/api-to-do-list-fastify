import { FastifyInstance } from "fastify";
import { TaskUseCase } from "../usecases/task.use.case";
import { TaskCreate } from "../interface/task.inferface";
import { Task } from "@prisma/client";

export async function taskRoutes(fastify: FastifyInstance) {
  const userUseCase = new TaskUseCase();

  fastify.post<{ Body: TaskCreate }>("/create", async (req, reply) => {
    const { name, description } = req.body;
    try {
      const data: Task = await userUseCase.create({
        name,
        description,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
