import { AppDataSource } from "../../persistence/typeorm/dataSource";
import { Task } from "../entities/Task.entity";

export class TaskRepository {
  private taskRepo = AppDataSource.getRepository(Task);

  async save(task: Task): Promise<Task> {
    return await this.taskRepo.save(task);
  }

  async getAll(): Promise<Task[]> {
    return await this.taskRepo.find();
  }

  async getById(id: number): Promise<Task | null> {
    return await this.taskRepo.findOneBy({id: id});
  }

  async deleteById(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}

export default TaskRepository;
