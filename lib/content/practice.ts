import { cache } from "react";
import { dbConnect } from "@/lib/mongodb";
import Practice, { IPractice, PRACTICE_SINGLETON_ID } from "@/models/Practice";

export type PracticeData = Omit<IPractice, "_id">;

const FALLBACK: PracticeData = {
  name: "Delaware Dental Solutions",
  shortName: "Delaware Dental",
  tagline: "",
  phone: "",
  phoneHref: "tel:",
  address: { line1: "", city: "", state: "DE", zip: "" },
  mapEmbed: "",
  hours: [],
  socials: [],
  areas: [],
  teamImage: "",
};

export const getPractice = cache(async (): Promise<PracticeData> => {
  await dbConnect();
  const doc = await Practice.findById(PRACTICE_SINGLETON_ID).lean();
  if (!doc) return FALLBACK;
  const { _id, ...rest } = doc;
  return rest;
});
