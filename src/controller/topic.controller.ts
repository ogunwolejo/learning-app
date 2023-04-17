import { Request, Response } from "express";

import TopicService from "../service/topic.service";

class TopicController  {
    private topicService:TopicService = new TopicService();

    
    public insertTopics = async(req:Request, res:Response) => {
        try {
            const {data} = req.body;

            const insertTopics = await this.topicService.addTopics(data)

            if(!insertTopics) {
                throw Error("Try again later, Error in inserting topics")
            }

            return res.status(201).json({
                status:"success",
                data:insertTopics
            })
            
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public insertTopic = async(req:Request, res:Response) => {
        try {
            const {title, video, category, description} = req.body;

            const insertTopic = await this.topicService.addTopic({title, category, video, description})

            if(!insertTopic) {
                throw Error("Try again later, Error in inserting topics")
            }

            return res.status(201).json({
                status:"success",
                data:insertTopic
            })
            
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public fetchTopicsInSubject = async(req:Request, res:Response) => {
        try {
            const {subjectId} = req.body;

            const getTopics = await this.topicService.getTopicInCategory(subjectId);
            
            if(!getTopics) {
                throw Error("Error in server, try again")
            }

            return res.status(200).json({
                status:"success",
                data:getTopics
            })

        } catch (error:any) {
            res.status(500).json({
                message:error.message
            })           
        }
    }


    public fetchTopic = async(req:Request, res:Response) => {
        try {
            const {id} = req.params;

            const getTopic = await this.topicService.getTopic(id);
            
            if(!getTopic) {
                throw Error("Error in server, try again")
            }

            return res.status(200).json({
                status:"success",
                data:getTopic
            })

        } catch (error:any) {
            res.status(500).json({
                message:error.message
            })           
        }
    }
}

export default TopicController