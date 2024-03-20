export interface Task {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskCreate {
  name: string;
  description: string;
}

export interface TaskRepository {
  create(data: TaskCreate): Promise<Task>;
}
