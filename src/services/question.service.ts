
import Question, { IQuestion } from "../models/Question.model";

export const createQuestion = async (payload: Partial<IQuestion>) => {
  return await Question.create(payload);
};

export const updateQuestion = async (id: string, payload: Partial<IQuestion>) => {
  return await Question.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteQuestion = async (id: string) => {
  return await Question.findByIdAndDelete(id);
};

export const getQuestion = async (id: string) => {
  return await Question.findById(id);
};

export const listQuestions = async (filter = {}) => {
  return await Question.find(filter).sort({ createdAt: -1 });
};
