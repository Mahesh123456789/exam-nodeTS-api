
import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content?: string;
  type?: string;
  choices?: string[];
  answer?: string;
  marks?: number;
  school?: mongoose.Types.ObjectId;
  subject?: mongoose.Types.ObjectId;
  classRef?: mongoose.Types.ObjectId;
  createdBy?: mongoose.Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>({
  title: { type: String, required: true },
  content: String,
  type: { type: String, enum: ["mcq","subjective","coding"], default: "subjective" },
  choices: [String],
  answer: String,
  marks: { type: Number, default: 1 },
  school: { type: Schema.Types.ObjectId, ref: "School" },
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  classRef: { type: Schema.Types.ObjectId, ref: "Class" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model<IQuestion>("Question", QuestionSchema);
