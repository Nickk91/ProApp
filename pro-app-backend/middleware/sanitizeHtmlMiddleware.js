import sanitizeHtml from "sanitize-html";
import STATUS_CODE from "../constants/statusCodes.js";

const sanitizeAndCheck = (input) => {
  if (typeof input === "string") {
    const sanitized = sanitizeHtml(input, {
      allowedTags: [],
      allowedAttributes: {},
    });
    if (sanitized !== input) {
      throw new Error("Unsafe content detected");
    }
    return sanitized;
  } else if (typeof input === "object" && input !== null) {
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        input[key] = sanitizeAndCheck(input[key]);
      }
    }
  }
  return input;
};

export const sanitizeInput = (req, res, next) => {
  try {
    if (req.body) {
      req.body = sanitizeAndCheck(req.body);
    }
    if (req.query) {
      req.query = sanitizeAndCheck(req.query);
    }
    if (req.headers) {
      req.headers = sanitizeAndCheck(req.headers);
    }
    next();
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST).send({ error: error.message });
  }
};
