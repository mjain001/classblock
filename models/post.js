const mongoose = require("mongoose");
const today = require("./date.js");
const commentschema = require("./Comment");
const postschema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "userType",
    required: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["Student", "Teacher"],
  },
  likedByStudent: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
  likedByTeacher: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Teacher",
  },
  content: {
    type: String,
    required: true,
  },
  media: {
    type: String,
  },
  Datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  Dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "comments",
  },
  // like: [likeschema]
});

const Post = mongoose.model("post", postschema);
//const Like = mongoose.model("like", likeschema);

module.exports = Post;
