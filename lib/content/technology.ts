import { cache } from "react";
import { dbConnect } from "@/lib/mongodb";
import Technology, { ITechnology } from "@/models/Technology";

export type TechnologyDTO = ITechnology & { id: string };

function serialize(doc: any): TechnologyDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export const getTechnology = cache(async () => {
  await dbConnect();
  const docs = await Technology.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
});

export async function getTechnologyById(id: string) {
  await dbConnect();
  const doc = await Technology.findById(id).lean();
  return doc ? serialize(doc) : null;
}
