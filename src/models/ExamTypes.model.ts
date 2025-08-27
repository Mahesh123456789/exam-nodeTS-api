
import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  name: string;
  description?: string;
  code?: string;
  displayName?: string;
  // school?: mongoose.Types.ObjectId;
}

const ExamTypeSchema = new Schema<IClass>({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  code: { type: String, default: "" },
  displayName: { type: String, default: "" },
  // school: { type: Schema.Types.ObjectId, ref: "School" }
}, { timestamps: true });

export default mongoose.model<IClass>("ExamType", ExamTypeSchema);
