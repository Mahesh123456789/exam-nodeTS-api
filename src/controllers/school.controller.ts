
import { Request, Response } from "express";
import School from "../models/School.model";

export const create = async (req: Request, res: Response) => {
  try {
    const s = await School.create(req.body);
    res.status(201).json(s);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (_: Request, res: Response) => {
  const items = await School.find().sort({ createdAt: -1 });
  res.json(items);
};

export const update = async (req: Request, res: Response) => {
  const s = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(s);
};

export const remove = async (req: Request, res: Response) => {
  await School.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
