import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
