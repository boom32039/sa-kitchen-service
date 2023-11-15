import config from "../config/config";
import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  const conn = await mongoose.connect(config.mongo_uri || '');

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
