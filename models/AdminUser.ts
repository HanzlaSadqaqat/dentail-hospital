import { Schema, model, models } from "mongoose";

export interface IAdminUser {
  email: string;
  passwordHash: string;
  name: string;
  createdAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>({
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.AdminUser || model<IAdminUser>("AdminUser", AdminUserSchema);
