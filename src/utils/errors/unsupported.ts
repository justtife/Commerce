import CustomError from "./custom";
// import { StatusCodes } from "http-status-codes";
export class UnsupportedError extends CustomError {
  constructor(message: string, statusCode: number = 422) {
    super(message, statusCode);
    this.message = message;
  }
}
