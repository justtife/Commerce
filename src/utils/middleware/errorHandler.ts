import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import errorResponse from "../interfaces/errorResponse";
import outputResponse from "../interfaces/outputResponse";
import prodLogger from "../logger/prodLogger";
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError: errorResponse = {
    message: err.message,
    statusCode: err.statusCode,
  }; //Different cases of errors
  switch (err) {
    //MongoDB Validation Error
    case err.name === "ValidationError":
      customError.message = `Invalid request; ${Object.values(err.errors)}`;
      customError.statusCode = StatusCodes.BAD_REQUEST;
      break;
    //Error for Duplicate values of unique items
    case err.name === "MongoError" && err.code === 11000:
      customError.message = `Duplicate value; The title: '${Object.values(
        err.keyValue
      )}' exists already`;
      customError.statusCode = StatusCodes.BAD_REQUEST;
      break;
    //Invalid MongoDB ObjectID
    case err.name === "CastError":
      customError.message = `Invalid Mongo ObjectId`;
      customError.statusCode = StatusCodes.BAD_REQUEST;
      break;
    //Other Errors
    default:
      customError.message =
        err.message || "An error occured, please try again later";
      customError.statusCode =
        err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  }
  const output: outputResponse = {
    status: "failed",
    message: customError.message,
  };
  prodLogger.error(err);
  res.status(customError.statusCode).json(output);
};
export default errorHandler;
