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
  avatar: {
    type: String,
    required: true,
    default:
      "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
    validate: {
      validator: function (v) {
        return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
          v
        );
      },
      message: "Invalid image address",
    },
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

const User = mongoose.model("User", userScheme);
export default User;
