
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  role?: string;
}

const UserSchema: Schema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, default: "",required: true, },
  lastName: { type: String, default: "",required: true, },
  role: { type: String, enum: ["admin", "teacher", "student"], default: "teacher",required: true },
  school: { type: Schema.Types.ObjectId, ref: "School" },
  profilePicture: { type: String, default: "" },
  email: { type: String, default: "",required: true },
  phone: { type: String, default: "",required: true },
  address: { type: String, default: "" },
  city: { type: String, default: "",required: true },
  state: { type: String, default: "" },
  country: { type: String, default: "" },
  zip: { type: String, default: "" },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  resetPasswordToken: { type: String, default: "" },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IUser>("User", UserSchema);
