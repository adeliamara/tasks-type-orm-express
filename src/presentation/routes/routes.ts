import { Router } from 'express';

export const taskRoutes: Router = Router()

import { TaskController } from '../controllers/TaskController';
const taskController: TaskController = new TaskController();

taskRoutes.post('/posts', taskController.createTask);
taskRoutes.get('/posts', taskController.getAllPosts);

