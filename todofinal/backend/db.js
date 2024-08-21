import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("connected from the env");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
