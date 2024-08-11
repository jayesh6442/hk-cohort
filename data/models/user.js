import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const userModel = mongoose.model("user", userShema);

export { userModel };
