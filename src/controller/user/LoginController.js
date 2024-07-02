import { loginUser } from "../../repository/user/loginRepository.js";



export const UserLogin = async (req, res) => {
  console.log('req: ', req.body);

    try {
        const data = await loginUser(req.body);
        res.status(data.status).json(data);
      } catch (error) {
        res.status(400).send(error.message);
      }
   
};
