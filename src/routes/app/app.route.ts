import { IRouter, Router } from "express";

class AppRouter {
    public router:IRouter = Router()

    constructor() {
        this.initalizeRoutes()
    }

    private initalizeRoutes () {
    } 
}

export default AppRouter