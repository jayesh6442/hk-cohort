import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jayesh");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
