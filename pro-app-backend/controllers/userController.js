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
  try {
    console.log(req.user);
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404);
      throw new Error("User dosen't exist");
    }
    const { _id, email, username, isAdmin } = user;
    const userAuthLevel = isAdmin ? 2 : 1;
    res.json({ _id, email, username, userAuthLevel });
  } catch (error) {
    next();
  }
};

export const userValidation = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ message: "User not found" });
    }

    if (user.isAdmin) {
      return next();
    }

    // Regular user can only access their projects
    const projectId = req.params.projectId;
    if (!projectId) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ message: "Project ID is required" });
    }

    if (!user.projects.map((p) => p.toString()).includes(projectId)) {
      return res
        .status(STATUS_CODE.FORBIDDEN)
        .json({ message: "Access denied" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const userExist = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ error: "All fields are mandatory!" });
  }
  if (email === password) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ error: "Your email and password must be different" });
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (user) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ error: "We already have a user with this email" });
  } else {
    return res.status(STATUS_CODE.OK).json({ message: "User does not exist" });
  }
};

export const getUserIdByUsername = async (req, res, next) => {
  console.log("getUserIdByUsername CONTROLLER");
  const userName = req.params.userName;
  if (!userName) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ error: "Username is mandatory!" });
  }

  const users = await User.find({
    username: { $regex: userName, $options: "i" },
  });
  console.log("getUserIdByUsername:", users);

  if (users.length > 0) {
    let userIdsArray = users.map((user) => user._id);

    req.userIdsArray = userIdsArray;
    console.log("req.userIdsArray!!!:", req.userIdsArray);
    next();
  } else {
    return res
      .status(STATUS_CODE.NOT_FOUND)
      .json({ message: "User does not exist" });
  }
};
