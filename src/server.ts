import express from "express";
import { Request, Response } from "express";
import "reflect-metadata";
import {AppDataSource} from "./persistence/typeorm/dataSource"
import {taskRoutes} from "./presentation/routes/routes"


const app = express();
const ds = AppDataSource

app.use(express.json());
app.get("/", (req: Request, res: Response) => res.json({ ok: "ok!" }));
app.use(taskRoutes)
app.listen(3333, () => {
    console.log("Server UP --> http://localhost:3333");
  });
