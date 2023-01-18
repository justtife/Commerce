//Import dotenv and configure it
import * as dotenv from "dotenv";
dotenv.config();
//Import express async errors to handle async errors
import "express-async-errors";
import express from "express";
const app = express();

//Security Middlewares
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import compression from "compression";

//Initialize middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: "*",
    credentials: true,
    exposedHeaders: ["set-cookie"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(hpp())
app.use(xss());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }));
app.use(compression());

// import logger from "./utils/logger";
import prodLogger from "./utils/logger/prodLogger";

app.get("/", (req, res) => {
  throw new Error("This is a test error");
});

//Import middlewares
import notFound from "./utils/middleware/notFound";
import errorHandler from "./utils/middleware/errorHandler";
//Not Found Middleware
app.use(notFound);
//Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
//Import connectDB
import connectDB from "./utils/db/connectDB";
const start = async () => {
  if (process.env.NODE_ENV !== "test") {
    try {
      //Connect to DB
      await connectDB(process.env.MONGO_URI as string);
      //Start Server
      app.listen(PORT, () => {
        prodLogger.info(`Server running on port ${PORT}`);
      });
    } catch (err) {
      prodLogger.error(err);
    }
  }
};
start();
