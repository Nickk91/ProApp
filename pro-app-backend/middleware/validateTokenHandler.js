import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";
import asyncHandler from "express-async-handler";

export const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer")) {
    return res
      .status(STATUS_CODE.UNAUTHORIZED)
      .json({ message: "Token is missing or invalid" });
  }

  token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err); // Log the error
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ message: "User is not authorized" });
    }
    req.user = decoded.user;

    next();
  });
});
