import { Request, Response } from "express";
import {Task} from "../../domain/entities/Task.entity"

export class TaskController{

    createTask = async (request: Request, response: Response) => {
        console.log(request.body)
        const { name, description } = request.body;

        if (!name || !description) {
            throw new Error('All parameters are required');
        }

        const newTask: Task = new Task();
        newTask.name = name;
        newTask.description = description;

        await await newTask.save();

        return response.status(201).json(newTask);
    }

    getAllTasks = async (request: Request, response: Response) => {
        
        const all = await Task.find();
        console.log(all)
        return response.status(201).json(all);
    }

    getById = async (request: Request, response: Response) => {
        const { id } = request.params;

        const task = await Task.findOneBy({id: Number(id)});
        return response.status(201).json(task);
    }

    deleteById = async (request: Request, response: Response) => {
        const { id } = request.params;
        const task = await Task.findOneBy({id: Number(id)});
        if (task) {
            console.log(task)
            await task.remove();
            return response.status(200).send();
        }

        return response.status(204).json('Task not found!');

    }

 
}

