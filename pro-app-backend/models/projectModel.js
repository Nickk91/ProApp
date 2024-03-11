import mongoose from "mongoose";

const projectScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
  },
  projectName: {
    type: String,
    required: true,
    minlength: 1,
  },
  projectDescription: {
    type: String,
    required: true,
    minlength: 8,
  },
  projectImage: {
    type: String,
    required: true,
    unique: true,
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
