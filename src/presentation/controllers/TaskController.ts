import { Request, Response } from "express";
import { Task } from "../../domain/entities/Task.entity";
import TaskRepository from "../../domain/repositories/TaskRepository"

const taskRepository = new TaskRepository();

export class TaskController {
  createTask = async (request: Request, response: Response) => {
    try {
      const { name, description } = request.body;
      if (!name || !description) {
        throw new Error('All parameters are required');
      }

      const newTask: Task = new Task();
      newTask.name = name;
      newTask.description = description;

      const savedTask = await taskRepository.save(newTask);
      return response.status(201).json(savedTask);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  };

  getAllTasks = async (request: Request, response: Response) => {
    try {
      const tasks = await taskRepository.getAll();
      return response.status(200).json(tasks);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  };

  getById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const taskId = parseInt(id, 10);
      const task = await taskRepository.getById(taskId);

      if (!task) {
        return response.status(404).json({ error: 'Task not found' });
      }

      return response.status(200).json(task);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  };

  deleteById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const taskId = parseInt(id, 10);
      const existingTask = await taskRepository.getById(taskId);

      if (!existingTask) {
        return response.status(404).json({ error: 'Task not found' });
      }

      await taskRepository.deleteById(taskId);
      return response.status(200).json({ message: 'Task deleted successfully' });
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  };
}
