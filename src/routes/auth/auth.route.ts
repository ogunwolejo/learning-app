import { IRouter, Router } from "express";

import AuthController from "../../controller/auth.controller";
import { VerifyTokenController } from "../../controller/token.controller";

class AuthRouter {
    public router:IRouter = Router()
    private auth:AuthController = new AuthController()

    constructor() {
        this.initalizeRoutes()
    }

    private initalizeRoutes () {
        this.router.post('/register', this.auth.registerUser)
        this.router.post('/login', this.auth.login)
        this.router.post("/verify", VerifyTokenController)
        
    } 
}

export default AuthRouter