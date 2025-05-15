import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`MongoDb Connection Error:${error}`);
    process.exit(1);
  }
};

export default dbConnection
