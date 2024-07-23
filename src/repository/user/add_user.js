import { UserModel } from "../../model/user/user.js"
import bcrypt from 'bcrypt'

export const addUser = async (data) => {
    try {
        const check_user = await UserModel.findOne({ email: data.email })
        if (!check_user) {
            data.password = await bcrypt.hash(data.password, 10)
            const userdata = UserModel(data)
            const user = await userdata.save()
            return {
                status : 201, 
                message : "you have regigrated successfully"
            }
        }
        else {
            return {
                status : 400, 
                message : "email already exists"
            }
        }
    } catch (error) {   
        if(error.keyPattern){
            return {
                status : 500, 
                message : "mobile number already exists"
            }
        }
    }
}