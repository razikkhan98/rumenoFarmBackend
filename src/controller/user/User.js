import { addUser } from "../../repository/user/add_user.js";

export class usercontroller {
  async UserRegistration(req, res) {
    const data = await addUser(req.body);
    console.log("data", data);
    res.status(data.status).json(data);
  }
}
