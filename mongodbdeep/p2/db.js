import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jayesh").then(() => {
      console.log("Connected with than");
    });
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
