import { Request, Response } from "express";

import SubjectService from "../service/subject.service";

class SubjectController {
    private subService:SubjectService = new SubjectService()

    public insertSubjects = async(req:Request, res:Response) => {
        try {
            const {data} = req.body
            const insert = await this.subService.addSubjects(data);

            console.log(insert);

            if(!insert) {
                throw Error("Could not insert subjects")
            }

            return res.status(201).json({
                status:"success",
                data:insert
            })

        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public insertSubject = async (req:Request, res:Response) => {
        try {
            const {category} = req.body
            const createSubject = await this.subService.addSubject({category})

            if(!createSubject) {
                throw Error("Could not create subject")
            }

            return res.status(201).json({
                status:"success",
                data:createSubject
            })

        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public allSubjects = async(req:Request, res:Response) => {
        try {
            console.log(req)
            const fetchSubjects = await this.subService.getSubjects()

            if(!fetchSubjects) {
                throw Error("Server Error")
            }

            return res.status(200).json({
                status:"success",
                data:fetchSubjects
            })

        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public findSubjectById = async(req:Request, res:Response) => {
        try {
            const {id} = req.params
            const subject = await this.subService.findSubjectById(id)

            if(!subject) {
                throw Error("Cannot get subject")
            }

            return res.status(200).json({
                status:"success",
                data:subject
            })


        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }


    public findSubjectByCategory = async(req:Request, res:Response) => {
        try {
            const {category} = req.body
            const subject = await this.subService.findSubjectByCategory(category)

            if(!subject) {
                throw Error("Cannot get subject")
            }

            return res.status(200).json({
                status:"success",
                data:subject
            })


        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }
}

export default SubjectController