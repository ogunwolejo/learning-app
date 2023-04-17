import { genSaltSync, hashSync, compareSync } from "bcryptjs";

class IHash {
    private salt:string = genSaltSync(12)

    public hashing = (password:string):string => {
        return hashSync(password, this.salt)
    }

    public comparingPassword = (hashPassword:string, password:string):boolean => {
        return compareSync(password, hashPassword);
    }
}

export default IHash