import { IRouter, Router } from "express";

import AuthController from "../../controller/auth.controller";

class AuthRouter {
    public router:IRouter = Router()
    private auth:AuthController = new AuthController()

    constructor() {
        this.initalizeRoutes()
    }

    private initalizeRoutes () {
        this.router.post('/register', this.auth.registerUser)
        this.router.post('/login', this.auth.login)
        
    } 
}

export default AuthRouter