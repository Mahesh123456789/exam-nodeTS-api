
import mongoose, { Schema, Document } from "mongoose";

export interface ISchool extends Document {
  name: string;
  address?: string;
}

const SchoolSchema = new Schema<ISchool>({
  name: { type: String, required: true },
  address: String
}, { timestamps: true });

export default mongoose.model<ISchool>("School", SchoolSchema);
