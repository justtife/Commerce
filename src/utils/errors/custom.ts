export class CustomError extends Error {
  protected constructor(message: string) {
    super(message);
  }
}

