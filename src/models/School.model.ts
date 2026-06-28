
import mongoose, { Schema, Document } from "mongoose";

export interface ISchool extends Document {
  name: string;
  address?: string;
  instituteType?: string;
  email?: string;
  phone?: string;
  website?: string;
  establishYear: string;
  standards?: Array<Schema.Types.ObjectId>;
  subjects?: Array<Schema.Types.ObjectId>;
  logo?: string;
  banner?: string;
  watermark?: string;
}

const SchoolSchema = new Schema<ISchool>({
  name: { type: String, required: true },
  address: String,
  instituteType: String,
  email: String,
  phone: String,
  website: String,
  establishYear: String,
  standards: Array,
  subjects: Array,
  logo: String,
  banner: String,
  watermark: String
}, { timestamps: true });

export default mongoose.model<ISchool>("School", SchoolSchema);
