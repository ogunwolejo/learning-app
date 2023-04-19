import { IRouter, Router } from "express";

import SubjectController from "../../controller/subject.controller";
import TopicController from "../../controller/topic.controller";

import AuthMiddleware from "../../middleware/auth.middleware";
//import { VerifyTokenController } from "../../controller/token.controller";

class AppRouter {
    public router:IRouter = Router()
    
    private subController:SubjectController = new SubjectController();
    private topicController:TopicController = new TopicController();
    private authMiddleware:AuthMiddleware = new AuthMiddleware()

    constructor() {
        this.initalizeRoutes()
    }

    private initalizeRoutes () {
        //GET
        //@ts-ignore
        this.router.get("/categories",  this.subController.allSubjects)
        this.router.get("/category/:id", this.subController.findSubjectById)
        this.router.get("/topic/:id", this.topicController.fetchTopic)
        
        //POST
        this.router.post("/categories", this.subController.insertSubjects)
        this.router.post("/category", this.subController.insertSubject)
        this.router.post("/find-category", this.subController.findSubjectByCategory)

        this.router.post("/topics", this.topicController.insertTopics)
        this.router.post("/topic", this.topicController.insertTopic)
        this.router.post("/topics-in-subject", this.topicController.fetchTopicsInSubject)

          //verify token
    } 
}

export default AppRouter