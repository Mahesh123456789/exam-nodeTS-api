
import mongoose, { Schema, Document } from "mongoose";

export interface ITopic extends Document {
  name: string;
  description?: string;
  weightage: number;
  standard: mongoose.Types.ObjectId;
  subject: mongoose.Types.ObjectId;
  examType: mongoose.Types.ObjectId;
}

const TopicSchema = new Schema<ITopic>({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  weightage: { type: Number, default: 0 },
  standard: { type: Schema.Types.ObjectId, ref: "Standard" },
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  examType: { type: Schema.Types.ObjectId, ref: "ExamType" }
}, { timestamps: true });

export default mongoose.model<ITopic>("Topic", TopicSchema);
