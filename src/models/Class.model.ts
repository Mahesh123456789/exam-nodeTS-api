
import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  name: string;
  code?: string;
  description?: string;
//  school?: mongoose.Types.ObjectId;
}

const ClassSchema = new Schema<IClass>({
  name: { type: String, required: true },
  description: String,
code: String,
 // school: { type: Schema.Types.ObjectId, ref: "School" }
}, { timestamps: true });

export default mongoose.model<IClass>("Class", ClassSchema);
