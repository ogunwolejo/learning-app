import { Request, Response } from "express";

import AuthService from "../service/auth.service";
import Token from "../util/token";
import IHash from "../util/hash";


class AuthController {
    private service:AuthService = new AuthService()
    private iToken:Token = new Token()
    private iHash:IHash = new IHash()

    public registerUser = async(req:Request, res:Response) => {
        console.log(req.body)
        try {
            const {email, password, fullName} = req.body
            const hashedPassword:string = this.iHash.hashing(password)
            const isUserCreated = await this.service.addUser({email, password:hashedPassword, fullName})

            if(!isUserCreated) {
                throw Error("coul not add user to the db")
            }

            //const token:string  = this.iToken.generateTokenForCreatedUser(isUserCreated?.email, isUserCreated?.fullName, isUserCreated?.id) // generating both accessing token

            return res.status(201).json({
                status:"success",
                data:isUserCreated
            })

        } catch (error:any) {
            res.status(400).json({
                status:error.message
            })
        }
    }



    public login = async(req:Request, res:Response) => { 
        try {
            const {email, password} = req.body
            const fetchUser = await this.service.fetchUserByEmail(email)

            if(!fetchUser) {
                throw Error("Could not find User with this credential")
            }

            // if user is found we compare the password
            const isPaswordCorrect:boolean = this.iHash.comparingPassword(fetchUser?.password, password)
            if(!isPaswordCorrect) {
                throw Error("invalid Password")
            }

            const token:string  = this.iToken.generateTokenForCreatedUser(fetchUser?.email, fetchUser?.fullName, fetchUser?.id) // generating both accessing token

            return res.status(200).json({
                status:"success",
                data:{
                    fullName: fetchUser?.fullName,
                    id:fetchUser?.id,
                    token
                }
            })


        } catch (error:any) {
            res.status(500).json({
                status: error?.message
            })
        } 
    }
}

export default AuthController