import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";
import asyncHandler from "express-async-handler";

export const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(STATUS_CODE.UNAUTHORIZED);
        throw new Error("User in not authorized");
      }
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("User is not authorized or token is missing");
    }
  }
});
