import { ITopics } from "../interface/topic.interface";
import topicModel from "../model/topic.model";

class TopicService {
    public addTopics = async(data:ITopics[]) => {
        const result = await topicModel.insertMany(data, {ordered:true})
        return result
    }

    public addTopic = async(arg:ITopics) => {
        const createdTopic = await topicModel.create({
            title:arg.title,
            video:arg.video,
            category:arg.category,
            description:!arg.description ? "" : arg.description
        })

        return createdTopic
    }

    public getTopic = async(id:string) => {
        const topic = await topicModel.findById(id)
        return topic;
    }


    public getTopicInCategory = async(subjectId:string) => {
        const topics = await topicModel.find({
            category:subjectId
        })

        return topics;
    }
}

export default TopicService