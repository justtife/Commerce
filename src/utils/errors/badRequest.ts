import CustomError from "./custom";
export class BadRequestError extends CustomError {
  constructor(message: string, statusCode: number = 400) {
    super(message, statusCode);
    this.message = message;
  }
}
