import CustomError from "./custom";
export class UnauthorisedError extends CustomError {
  constructor(message: string, statusCode: number = 401) {
    super(message, statusCode);
    this.message = message;
  }
}
