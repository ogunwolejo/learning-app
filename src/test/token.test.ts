import Token from "../util/token";

const token = new Token();
describe('Token', () => {
    // generate token
    process.env.tokenKey = "122222"
    describe('generate token', () => {
        it('should return a string', () => {
            const userDetails = {email:'1234@gmail.com', id:'12333', fullName:'Joshua Ogunwole'};
            const tokenValue = token.generateTokenForCreatedUser(userDetails.email, userDetails.fullName, userDetails.id);
            expect(tokenValue).not.toBeFalsy();
        })
    })

    //decode token
    describe("decode token", () => {
        it('should return a truthy value', () => {
            const userDetails = {email:'1234@gmail.com', id:'12333', fullName:'Joshua Ogunwole'};
            const tokenValue = token.generateTokenForCreatedUser(userDetails.email, userDetails.fullName, userDetails.id);
            const verifyToken = token.decodeToken(tokenValue);
            expect(verifyToken).toBeTruthy();
        })

        it('should return a falsy value', () => {
            const tokenValue = 'yyyyyyghghggghghgshss';
            const verifyToken = token.decodeToken(tokenValue);
            expect(verifyToken).toBeFalsy();
        })
    })

})