import { Request, Response } from "express";
import {Task} from "../../domain/entities/Task.entity"

export class TaskController{

    createTask = async (request: Request, response: Response) => {
        const { name, description } = request.body;

        if (!name || !description) {
            throw new Error('All parameters are required');
        }

        const newTask: Task = new Task();
        newTask.name = name;
        newTask.description = description;

        await newTask.save();

        return response.status(201).json(newTask);
    }

    
    getAllPosts = async (request: Request, response: Response) => {
        return Task.find();
    }

 
}

