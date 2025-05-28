import express from "express";
import { SaveTaskController } from "../controllers/SaveTaskController";
import { AuthTokenMiddleware } from "../../../shared/middleware/AuthTokenMiddleware";
import { UpdateTaskController } from "../controllers/UpdateTaskController";
import { FindTaskByIdController } from "../controllers/FindTaskByIdController";
import { FindAllTaskByIdUserController } from "../controllers/FindAllTaskByIdUserController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";
export class TaskRoute {
    private path = "/task";
    public router = express.Router();

    private saveTaskController = new SaveTaskController();
    private updateTaskController = new UpdateTaskController();
    private findTaskByIdController = new FindTaskByIdController();
    private findAllTaskByIdUserController = new FindAllTaskByIdUserController();
    private deleteTaskController = new DeleteTaskController();


    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, AuthTokenMiddleware,  (req, res, next) => {this.saveTaskController.run(req, res)});
        this.router.patch(`${this.path}/:id`, AuthTokenMiddleware,  (req, res, next) => {this.updateTaskController.run(req, res)});
        this.router.get(`${this.path}/:id`, AuthTokenMiddleware , (req, res, next) => {this.findTaskByIdController.run(req, res)});
        this.router.get(`${this.path}/user/:id`, AuthTokenMiddleware , (req, res, next) => {this.findAllTaskByIdUserController.run(req, res)});
        this.router.delete(`${this.path}/:id`, AuthTokenMiddleware , (req, res, next) => {this.deleteTaskController.run(req, res)});
    }
}