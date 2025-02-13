import STATUS_CODE from "../constants/statusCodes.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ message: "All fields are mandatory!" });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            _id: user._id,
            authLevel: user.authLevel,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "35m" }
      );

      return res.status(STATUS_CODE.OK).json({
        accessToken,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          authLevel: user.authLevel,
        },
      });
    }

    return res
      .status(STATUS_CODE.UNAUTHORIZED)
      .json({ message: "Email or password is not valid" });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const username = req.body.username.trim();
    const email = req.body.email.trim().toLowerCase();

    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(STATUS_CODE.CREATED).send({
      username: newUser.username,
      email: newUser.email,
      _id: newUser._id,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(STATUS_CODE.CONFLICT)
        .json({ error: "Username or email already exists" });
    }

    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: errorMessages.join(", ") });
    }

    console.error("Error creating user:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};

// @des get all users
// @route GET / api/n
// @access Public
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("projects").exec();
    res.send(users);
  } catch (error) {
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
    const { username, email, authLevel, avatar, _id } = user;
    res.send({ username, email, authLevel, avatar, _id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//@desc Current user info
//@route POST /api/users/current
//access private

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404);
      throw new Error("User dosen't exist");
    }
    const { _id, email, username, avatar, authLevel } = user;
    // isAdmin
    const userAuthLevel = authLevel;
    res.json({ _id, email, username, userAuthLevel, avatar });
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
  ("getUserIdByUsername CONTROLLER");
  const userName = req.params.userName;
  if (!userName) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ error: "Username is mandatory!" });
  }

  const users = await User.find({
    username: { $regex: userName, $options: "i" },
  });

  if (users.length > 0) {
    let userIdsArray = users.map((user) => user._id);

    req.userIdsArray = userIdsArray;

    next();
  } else {
    return res
      .status(STATUS_CODE.NOT_FOUND)
      .json({ message: "User does not exist" });
  }
};

export const changeUserImg = async (req, res) => {
  try {
    const { userId, url } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ message: "User not found" });
    }

    user.avatar = url;
    await user.save();

    res
      .status(STATUS_CODE.OK)
      .json({ message: "User's avatar updated successfully", user });
  } catch (error) {
    console.error("Error updating user's avatar", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
