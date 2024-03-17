import mongoose from "mongoose";

const projectScheme = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  projectName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  projectDescription: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 120,
  },
  projectImage: {
    type: String,
    required: false,
    default: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",

    validate: {
      validator: function (v) {
        return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
          v
        );
      },
      message: "Invalid URL address",
    },
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Project = mongoose.model("Project", projectScheme);
export default Project;
