import { cache } from "react";
import { dbConnect } from "@/lib/mongodb";
import Doctor, { IDoctor } from "@/models/Doctor";

export type DoctorDTO = IDoctor & { id: string };

function serialize(doc: any): DoctorDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export const getDoctors = cache(async () => {
  await dbConnect();
  const docs = await Doctor.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
});

export const getDoctorBySlug = cache(async (slug: string) => {
  await dbConnect();
  const doc = await Doctor.findOne({ slug }).lean();
  return doc ? serialize(doc) : null;
});

export async function getDoctorById(id: string) {
  await dbConnect();
  const doc = await Doctor.findById(id).lean();
  return doc ? serialize(doc) : null;
}
