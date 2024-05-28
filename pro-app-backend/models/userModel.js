//userModel.js
import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v);
      },
      message: "Invalid email address",
    },
  },

  authLevel: {
    type: Number,
    default: 1,
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

const User = mongoose.model("User", userScheme);
export default User;
