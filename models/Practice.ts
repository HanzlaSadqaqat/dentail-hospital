import { Schema, model, models } from "mongoose";

export interface IPractice {
  _id: string;
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  address: { line1: string; city: string; state: string; zip: string };
  mapEmbed: string;
  hours: { day: string; time: string }[];
  socials: { name: string; href: string }[];
  areas: string[];
  teamImage: string;
}

export const PRACTICE_SINGLETON_ID = "practice";

const PracticeSchema = new Schema<IPractice>({
  _id: { type: String, default: PRACTICE_SINGLETON_ID },
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  tagline: { type: String, required: true },
  phone: { type: String, required: true },
  phoneHref: { type: String, required: true },
  address: {
    line1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  mapEmbed: { type: String, default: "" },
  hours: [{ day: String, time: String }],
  socials: [{ name: String, href: String }],
  areas: [String],
  teamImage: { type: String, default: "" },
});

export default models.Practice || model<IPractice>("Practice", PracticeSchema);
