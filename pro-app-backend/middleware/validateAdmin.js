import userAuthLevels from "../constants/userAuthLevels.js";

export const validateAdmin = (req, res, next) => {
  if (req.user.authLevel < userAuthLevels.admin) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};
