import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  coursename: String,
  courseprice: Number,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});

const courseModel = mongoose.model("couser", courseSchema);
const userModel = mongoose.model("yeheuser", userSchema);

export { userModel, courseModel };
