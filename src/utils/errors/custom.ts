class CustomError extends Error {
  public message: string;
  public statusCode: number;
  protected constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
export default CustomError;
