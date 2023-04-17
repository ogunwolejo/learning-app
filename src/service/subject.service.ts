import { ISubject } from "../interface/subject.interface";
import subjectModel from "../model/subject.model";

class SubjectService {
    public addSubjects = async(arg:ISubject[]) => {
        const result = await subjectModel.insertMany(arg, {ordered:true})
        return result
    }
    
    public addSubject = async(arg:ISubject) => {
        const created = await subjectModel.create({
            category:arg.category
        })

        return created
    }

    public getSubjects = async() => {
        const allCategories = await subjectModel.find().exec()
        return allCategories
    }

    public findSubjectById = async(id:string) => {
        const subject = await subjectModel.findById(id).exec()
        return subject
    }

    public findSubjectByCategory = async(category:string) => {
        const subject = await subjectModel.findOne({category}).exec()
        return subject
    }
}

export default SubjectService