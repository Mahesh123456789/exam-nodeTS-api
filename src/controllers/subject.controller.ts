
import { Request, Response } from "express";
import Subject from "../models/Subject.model";

export const create = async (req: Request, res: Response) => {
  try {
    const s = await Subject.create(req.body);
    res.status(201).json(s);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (_: Request, res: Response) => {
  try{
    const items = await Subject.find().sort({ createdAt: -1 });
  res.json({'data': items, 'status': 'success', 'message': 'Subject list fetched successfully'});
} catch (err: any) {
   res.status(400).json({ message: err.message });
}
  
};

export const update = async (req: Request, res: Response) => {
  const s = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(s);
};

export const remove = async (req: Request, res: Response) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
