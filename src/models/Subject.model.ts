
import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  name: string;
  displayName: string;
  description?: string;
  code?: string;
  //school?: mongoose.Types.ObjectId;
}

const SubjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  displayName: { type: String, required: true },
  description: { type: String, default: "" },
  code: { type: String, default: "" },
//  school: { type: Schema.Types.ObjectId, ref: "School" }
}, { timestamps: true });

export default mongoose.model<ISubject>("Subject", SubjectSchema);
