import { Schema, model, models } from "mongoose";

export type ServiceCategory = "General" | "Cosmetic" | "Restorative" | "Specialty";

export interface IService {
  slug: string;
  name: string;
  category: ServiceCategory;
  blurb: string;
  body: string[];
  highlights?: string[];
  image: string;
  order: number;
}

const ServiceSchema = new Schema<IService>({
  slug: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ["General", "Cosmetic", "Restorative", "Specialty"],
    required: true,
  },
  blurb: { type: String, required: true },
  body: [String],
  highlights: [String],
  image: { type: String, default: "" },
  order: { type: Number, default: 0 },
});

export default models.Service || model<IService>("Service", ServiceSchema);
