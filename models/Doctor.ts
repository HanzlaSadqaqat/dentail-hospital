import { Schema, model, models } from "mongoose";

export interface IDoctor {
  slug: string;
  name: string;
  credential: string;
  role: string;
  image: string;
  short: string;
  bio: string[];
  memberships?: string[];
  interests?: string;
  order: number;
}

const DoctorSchema = new Schema<IDoctor>({
  slug: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  credential: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, default: "" },
  short: { type: String, required: true },
  bio: [String],
  memberships: [String],
  interests: String,
  order: { type: Number, default: 0 },
});

export default models.Doctor || model<IDoctor>("Doctor", DoctorSchema);
