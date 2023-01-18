import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import OutputResponse from "../interfaces/outputResponse";
const notFound = (req: Request, res: Response) => {
  const output: OutputResponse = {
    status: "failed",
    message: "Route does not exist",
  };
  res.status(StatusCodes.NOT_FOUND).json(output);
};
export default notFound;
