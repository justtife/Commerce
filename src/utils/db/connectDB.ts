import mongoose from "mongoose";
//ts-ignore
// import logger from "../logger";
import prodLogger from "../logger/prodLogger";
const connectDB = async (url: string) => {
  const conn = await mongoose.connect(url);
  prodLogger.info(`MongoDB Connected: ${conn.connection.host}`);
};
export default connectDB;
