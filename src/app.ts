
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/mongoose";
import authRoutes from "./routes/auth.routes";
import questionRoutes from "./routes/question.routes";
import schoolRoutes from "./routes/school.routes";
import subjectRoutes from "./routes/subject.routes";
import classRoutes from "./routes/class.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import { dbLogger } from "./middlewares/logger.middleware";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// public routes
app.use("/auth", authRoutes);

// apply auth for other routes
app.use(authMiddleware);

// log DB-changing requests
app.use(dbLogger);

// protected routes
app.use("/questions", questionRoutes);
app.use("/schools", schoolRoutes);
app.use("/subjects", subjectRoutes);
app.use("/classes", classRoutes);

app.get("/health", (_req, res) => res.json({ ok: true }));

export default app;
