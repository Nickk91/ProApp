import STATUS_CODE from "../constants/statusCodes.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    console.log("CREATING A USER WITH", req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    res
      .status(STATUS_CODE.CREATED)
      .send({ username: user.username, email: user.email, _id: user._id });
  } catch (error) {
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
    console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};

// export const createUser = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(STATUS_CODE.CREATED).send(user);
//   } catch (error) {
//     res
//       .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
//       .json({ message: error.message });
//     console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
//   }
// };

// @des get all users
// @route GET / api/n
// @access Public
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    console.log("Error fetching users", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne(req.params.userId);
    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User was not found");
    }

    res.send(user);
  } catch (error) {
    console.log("Error fetching user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
