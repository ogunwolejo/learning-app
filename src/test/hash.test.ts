import IHash from "../util/hash";

const ihash:IHash = new IHash();

describe('Hashing block', () => {
    it('should be truthy', () => {
        const password = 'password123'
        const hashPassword = ihash.hashing(password)
        expect(hashPassword).not.toBeFalsy()
    })

    describe("compare hashed password and normal password", () => {
        it("should be true", () => {
            const hashPassword = ihash.hashing("password67675675765")
            const password = "password67675675765"
            const isTrue = ihash.comparingPassword(hashPassword, password)
            expect(isTrue).toEqual(true)
        })

        it("should be false", () => {
            const hashPassword = ihash.hashing("password67675675765")
            const password = "password"
            const isTrue = ihash.comparingPassword(hashPassword, password)
            expect(isTrue).toEqual(false)
        })
    })
})