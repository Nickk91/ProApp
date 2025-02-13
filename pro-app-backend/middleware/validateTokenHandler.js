import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";
import asyncHandler from "express-async-handler";

export const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer")) {
    return res
      .status(STATUS_CODE.UNAUTHORIZED)
      .json({ message: "Token is missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      // Check if the error is due to token expiration
      if (err.name === "TokenExpiredError") {
        return res
          .status(STATUS_CODE.UNAUTHORIZED)
          .json({ message: "jwt expired" });
      }
      // Handle other JWT verification errors
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ message: "User is not authorized" });
    }

    req.user = decoded.user;
    next();
  });
});
