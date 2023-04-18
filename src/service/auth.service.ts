import userModel from "../model/user.model";
import { IUser } from "../interface/auth.interface";

class AuthService {
    public addUser = async (arg: IUser) => {
        const createUser = await userModel.create({
            email: arg.email,
            password: arg.password,
            fullName: arg.fullName
        })

        console.log(`sssppp`, createUser)

        return createUser;
    }

    public fetchUserByEmail = async (email: string) => {
        const user = await userModel.findOne({ email }).exec()
        return user;
    }
}

export default AuthService