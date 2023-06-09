import { Request, Response } from "express";

import AuthService from "../service/auth.service";
import Token from "../util/token";
import IHash from "../util/hash";


class AuthController {
    private service: AuthService = new AuthService()
    private iToken: Token = new Token()
    private iHash: IHash = new IHash()

    public registerUser = async (req: Request, res: Response) => {
        try {
            console.log(`3`, req.body, req)
            const { email, password, fullName } = req.body
            console.log(`2`, req.body, req)
            const hashedPassword: string = this.iHash.hashing(password)
            const isUserCreated = await this.service.addUser({ email:email, password: hashedPassword, fullName:fullName })

            console.log(`1`, req.body, req)

            console.log(`sss`, isUserCreated)

            if (!isUserCreated) {
                throw Error("could not add user to the db")
            }

            const token: string = this.iToken.generateTokenForCreatedUser(isUserCreated?.email, isUserCreated?.fullName, isUserCreated?.id) // generating both accessing token

            return res.status(201).json({
                status: "success",
                data: {
                    fullName: isUserCreated?.fullName,
                    id: isUserCreated?.id,
                    token
                },

            })

        } catch (error: any) {
            res.status(400).json({
                status: error.message
            })
        }
    }



    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            const fetchUser = await this.service.fetchUserByEmail(email)

            if (!fetchUser) {
                throw Error("Could not find User with this credential")
            }

            // if user is found we compare the password
            const isPaswordCorrect: boolean = this.iHash.comparingPassword(fetchUser?.password, password)
            if (!isPaswordCorrect) {
                throw Error("invalid Password")
            }

            const token: string = this.iToken.generateTokenForCreatedUser(fetchUser?.email, fetchUser?.fullName, fetchUser?.id) // generating both accessing token

            return res.status(200).json({
                status: "success",
                data: {
                    fullName: fetchUser?.fullName,
                    id: fetchUser?.id,
                    token
                }
            })


        } catch (error: any) {
            res.status(500).json({
                status: error?.message
            })
        }
    }
}

export default AuthController