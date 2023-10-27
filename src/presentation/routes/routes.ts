import { Router } from 'express';

export const taskRoutes: Router = Router()

import { TaskController } from '../controllers/TaskController';
const taskController: TaskController = new TaskController();

taskRoutes.post('/tasks', taskController.createTask);
taskRoutes.get('/tasks', taskController.getAllTasks);
taskRoutes.get('/tasks/:id', taskController.getById);
taskRoutes.delete('/tasks/:id', taskController.deleteById);

