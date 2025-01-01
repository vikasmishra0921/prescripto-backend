import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Databse connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);

    console.log("Mongoose connection successful");
  } catch (error) {
    console.error("error connecting to mongoDB:", error.message);
  }
};

export default connectDB;
