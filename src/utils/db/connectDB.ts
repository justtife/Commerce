import mongoose from "mongoose";
//ts-ignore
import logger from "../logger";
const connectDB = async (url: string) => {
  const conn = await mongoose.connect(url);
  logger.info(`MongoDB Connected: ${conn.connection.host}`);
};
export default connectDB;
