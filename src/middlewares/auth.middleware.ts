
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // allow health check
  if (req.path === "/health") return next();

  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No authorization header" });

  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") return res.status(401).json({ message: "Invalid auth format" });

  const token = parts[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
