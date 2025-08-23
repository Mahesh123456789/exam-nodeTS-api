
import { Request, Response } from "express";
import * as qs from "../services/question.service";
import { ioEmit } from "../sockets/broadcast";

export const create = async (req: Request, res: Response) => {
  try {
    const payload = { ...req.body, createdBy: (req as any).user?.id };
    const q = await qs.createQuestion(payload);
    ioEmit("question:created", q);
    res.status(201).json(q);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const q = await qs.updateQuestion(req.params.id, req.body);
    ioEmit("question:updated", q);
    res.json(q);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await qs.deleteQuestion(req.params.id);
    ioEmit("question:deleted", { id: req.params.id });
    res.json({ ok: true });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const q = await qs.getQuestion(req.params.id);
    if (!q) return res.status(404).json({ message: "Not found" });
    res.json(q);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (req: Request, res: Response) => {
  try {
    const items = await qs.listQuestions(req.query || {});
    res.json(items);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
