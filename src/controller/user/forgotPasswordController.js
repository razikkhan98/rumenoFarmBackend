import { UserModel } from "../../model/user/user.js"
import bcrypt from 'bcrypt'

export const forgetPassword = async (req, res) => {
    console.log('req: ', req.body);
    try {
        const setPassword = await bcrypt.hash(req.body.newpassword, 10)
      const user = await UserModel.findOneAndUpdate({mobile:req.body.mobile},{password:setPassword});
      console.log('user: ', user);
      res.json({message:"password updated successfully"});
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export default {forgetPassword}