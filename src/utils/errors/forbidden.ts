import CustomError from "./custom";
export class ForbiddenError extends CustomError {
  constructor(message: string, statusCode: number = 403) {
    super(message, statusCode);
    this.message = message;
  }
}
