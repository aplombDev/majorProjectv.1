import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DBString = `${process.env.MONGO_URI}`;
    const connection = await mongoose.connect(DBString);
    console.log(mongoose.connection + `Connected to DB`);
  } catch (error) {
    console.log("DB ERR:", error.message);
    throw new Error("Failed to establish connection with the database");
  }
};
