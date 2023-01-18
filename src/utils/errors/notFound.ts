import { CustomError } from "./custom";
import { StatusCodes } from "http-status-codes";
export class NotFoundError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
