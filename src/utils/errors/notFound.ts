import CustomError from "./custom";
export class NotFoundError extends CustomError {
  constructor(message: string, statusCode: number = 404) {
    super(message, statusCode);
    this.message = message;
  }
}
