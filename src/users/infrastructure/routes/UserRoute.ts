import express from 'express';
import { SaveUserController } from '../controllers/SaveUserController';
import { FindAllUsersController } from '../controllers/FindAllUsersController';
import { UpdateUserController } from '../controllers/UpdateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { FindByIdUserController } from '../controllers/FindByIdUserController';
import { AuthTokenMiddleware } from '../../../shared/middleware/AuthTokenMiddleware';

export class UserRoute {
    public router = express.Router();
    private findUserController = new FindAllUsersController();
    private saveUserController = new SaveUserController();
    private updateUserController = new UpdateUserController();
    private deleteUserController = new DeleteUserController();
    private findByIdUserController = new FindByIdUserController();
         

    constructor() {
        this.initializeRoutes();
    }   

    private initializeRoutes() {
        
        this.router.get('/users', AuthTokenMiddleware, (req, res, next) => this.findUserController.run(req, res, next));
        this.router.get('/users/:id', AuthTokenMiddleware, (req, res, next) => this.findByIdUserController.run(req, res));
        this.router.post('/users',(req, res, next) => this.saveUserController.run(req, res));
        this.router.put('/users/:id', AuthTokenMiddleware, (req, res, next) => this.updateUserController.run(req, res));
        this.router.delete('/users/:id', AuthTokenMiddleware,(req, res, next) => this.deleteUserController.run(req, res));
       
    }

}