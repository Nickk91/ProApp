import "dotenv/config";
import STATUS_CODE from "../constants/statusCodes.js";

export const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode && res.statusCode !== STATUS_CODE.OK
      ? res.statusCode
      : STATUS_CODE.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected error occurred",
    stack: process.env.ENV === "production" ? null : err.stack,
  });
};
