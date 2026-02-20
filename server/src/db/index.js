import mongoose from "mongoose";

export const connectDB = async () => {
  try {
     const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/orginazation`
    );
    console.log(
      `\n MongoDB connected !!! DB HOST:${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MongoDB connection failed");
    process.exit(1);
  }
};