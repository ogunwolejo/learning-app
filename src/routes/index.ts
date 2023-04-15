import { IRouter, Router } from "express";

import AppRouter from "./app/app.route";
import AuthRouter from "./auth/auth.route";

class IAppRouter {
    public router:IRouter = Router()
    private appRouter:AppRouter = new AppRouter()
    private authRouter:AuthRouter = new AuthRouter()

    constructor() {
        this.initalizeRoutes()
    }

    private initalizeRoutes () {
        this.router.use('/app', this.appRouter.router)
        this.router.use('/auth', this.authRouter.router)
    } 
}

export default IAppRouter