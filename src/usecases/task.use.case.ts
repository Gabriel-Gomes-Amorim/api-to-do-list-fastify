import { Task } from "@prisma/client";
import { TaskCreate, TaskRepository } from "../interface/task.inferface";
import { TaskRepositoryPrisma } from "../repositories/task.repository";

export class TaskUseCase {
  private taskRepository: TaskRepository;
  constructor() {
    this.taskRepository = new TaskRepositoryPrisma();
  }

  async create({ name, description }: TaskCreate): Promise<Task> {
    const task: Task = await this.taskRepository.create({ name, description });

    return task;
  }
}
