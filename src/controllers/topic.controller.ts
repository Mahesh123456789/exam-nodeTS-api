
import { Request, Response } from "express";
import Topic from "../models/Topic.model";

export const save = async (req: Request, res: Response) => {
  try {
    const s = await Topic.create(req.body);
    res.status(201).json({data: s, message: "Topic added successfully", status: "success"});
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (_: Request, res: Response) => {
  const items = await Topic.find().sort({ createdAt: -1 });
  res.json(items);
};

export const update = async (req: Request, res: Response) => {
  const s = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(s);
};

export const remove = async (req: Request, res: Response) => {
  await Topic.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
