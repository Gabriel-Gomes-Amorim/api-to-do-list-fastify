import { prisma } from "../database/prisma-client";
import { Task, TaskCreate, TaskRepository } from "../interface/task.inferface";

export class TaskRepositoryPrisma implements TaskRepository {
  async create(data: TaskCreate): Promise<Task> {
    const task: Task = await prisma.task.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return task;
  }
}
