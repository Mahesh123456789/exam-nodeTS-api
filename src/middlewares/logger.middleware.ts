
import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const dbLogger = (req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => {
    if (['POST','PUT','DELETE'].includes(req.method)) {
      // log relevant DB-modifying requests
      logger.info({
        method: req.method,
        url: req.originalUrl,
        body: req.body,
        user: (req as any).user || null,
        status: res.statusCode
      });
    }
  });
  next();
};
