import { Request,  Response } from "express"
import Token from "../util/token";

const t = new Token()

export const VerifyTokenController = async (req:Request, res:Response) => {
    try {
        const {token} = req.body;

        const isToken = t.verifyToken(token);
        const decode = t.decodeToken(token);

        return res.status(200).json({
            status:'sucess',
            data:{
                decoded: decode,
                verified:isToken
            }
        })
    } catch (error) {
        return res.status(500).json({
            status:'error',
        })
    }
}