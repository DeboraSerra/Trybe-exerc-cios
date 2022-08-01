import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  console.log({ name, message });
  switch (name) {
    case 'NotFoundError':
      return res.status(404).json({ message });
    default:
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: message || 'Internal Server Error' });
  }
}
