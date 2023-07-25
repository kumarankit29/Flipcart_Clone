// if send something from backend  to frontend we use response
import UserList from "../model/user-schema.js";
export const userSignup = async (request, response) => {
  try {
    // user exist
    const exist = await UserList.findOne({ username: request.body.username });

    const emailExist = await UserList.findOne({ username: request.body.email });
    if (exist) {
      response.status(401).json({ message: "Username already exist" });
    } else if (emailExist) {
      response.status(401).json({ message: "Email already exist" });
    }
    const user = request.body;
    const newUser = new UserList(user);
    // when we need to add one object in DB we Use save
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    let user = await UserList.findOne({
      username: request.body.username,
      password: request.body.password,
    });
    if (user) {
    
      return response
        .status(200)
        .json(`${request.body.username} login successfull`);
    } else {
     
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    response.json("error", error.message);
  }
};
