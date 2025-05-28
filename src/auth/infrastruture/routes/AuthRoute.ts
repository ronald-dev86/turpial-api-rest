import express from "express";
import { LoginController } from "../controllers/LoginController";
import { FindByTokenController } from "../controllers/FindByTokenController";
import { AuthTokenMiddleware } from "../../../shared/middleware/AuthTokenMiddleware";
import { RefreshTokenController } from "../controllers/RefreshTokenController";
import { LogoutController } from "../controllers/LogoutController";



export class AuthRoute {
    private path = "/auth";
    public router = express.Router();

    private loginController = new LoginController();
    private logoutController = new LogoutController();
    private findByTokenController = new FindByTokenController();
    private refreshTokenController = new RefreshTokenController();


    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/login`, (req, res, next) => {this.loginController.run(req, res)});
        this.router.post(`${this.path}/refreshToken`, (req, res, next) => {this.refreshTokenController.run(req, res)});
        this.router.post(`${this.path}/logout`, AuthTokenMiddleware , (req, res, next) => {this.logoutController.run(req, res)});
        this.router.get(`${this.path}/token`, AuthTokenMiddleware , (req, res, next) => {this.findByTokenController.run(req, res)});
    }
}