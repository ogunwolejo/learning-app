import jsonwebtoken from 'jsonwebtoken';

class Token {
    public generateTokenForCreatedUser = (email:string, fullName:string, id:string) => {
        //@ts-ignore
        return jsonwebtoken.sign({id, email, fullName}, process.env.tokenKey, { algorithm: 'HS256', expiresIn:'365d' }) //expires in 7days
    }
    

    public verifyToken = (token:string) => {
        //@ts-ignore
        return jsonwebtoken.verify(token, process.env.tokenKey, { algorithm: 'HS256', expiresIn:'365d' })
    }

    public decodeToken = (token:string) => {
        //@ts-ignore
        return jsonwebtoken.decode(token, process.env.tokenKey, {algorithm: 'HS256'})
    }
}


export default Token;