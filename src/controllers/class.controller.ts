
import { Request, Response } from "express";
import ClassModel from "../models/Class.model";
import  ExamTypeModel  from "../models/ExamTypes.model";

export const addStandard = async (req: Request, res: Response) => {
  try {
    const c = await ClassModel.create(req.body);
    res.status(201).json({data:c, status: 'success', message: 'Standard added successfully'});
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const standardList = async (_: Request, res: Response) => {
  const items = await ClassModel.find().sort({ createdAt: -1 });
  res.json(items);
};

export const update = async (req: Request, res: Response) => {
  const c = await ClassModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(c);
};

export const remove = async (req: Request, res: Response) => {
  await ClassModel.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};

export const examTypsList = async (_: Request, res: Response) => {
  const items = await ExamTypeModel.find().sort({ createdAt: -1 });
  res.json({data:items, status: 'success', message: 'Exam types list fetched successfully'});
};