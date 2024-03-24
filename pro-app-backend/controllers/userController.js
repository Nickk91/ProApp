import STATUS_CODE from "../constants/statusCodes.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(STATUS_CODE.BAD_REQUEST);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          _id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "35m" }
    );
    res.status(STATUS_CODE.OK).json({ accessToken });
  } else {
    res.status(STATUS_CODE.UNAUTHORIZED);
    throw new Error("email or password is not valid");
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("CREATING A USER WITH", req.body);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

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
      .json({ error: "Internal Server Error FOR REALY BRUV" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User was not found");
    }
    const { username, email, isAdmin, _id } = user;
    res.send({ username, email, isAdmin, _id });
  } catch (error) {
    console.log("Error fetching user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//@desc Current user info
//@route POST /api/users/current
//access private

export const currentUser = async (req, res) => {
  console.log(req.user);
  res.json(req.user);
};
