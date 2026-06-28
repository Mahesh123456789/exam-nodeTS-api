import User from "../models/User.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Fix: import the whole jwt module
import config from "../config";

export const register = async (body: any) => {
  const exists = await User.findOne({ userName: body.userName });
  if (exists) throw new Error("User already exists");
  const hash = await bcrypt.hash(body.password, 10);
  const user = await User.create({
    ...body,
    password: hash,
    role: body.role || "teacher", // Default to 'teacher' if not provided
  });
  let token = jwt.sign({ id: user._id }, config.JWT_SECRET);
  return { user, token };
};

export const login = async (userName: string, password: string) => {
  const user = await User.findOne({ userName });
  if (!user) throw new Error("User not found");
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");
  let token = jwt.sign({ id: user._id }, config.JWT_SECRET);
  return { user, token, 'status':'success' };
};
