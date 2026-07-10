import { dbConnect } from "@/lib/mongodb";
import Differentiator, { IDifferentiator } from "@/models/Differentiator";

export type DifferentiatorDTO = IDifferentiator & { id: string };

function serialize(doc: any): DifferentiatorDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export async function getDifferentiators() {
  await dbConnect();
  const docs = await Differentiator.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
}

export async function getDifferentiatorById(id: string) {
  await dbConnect();
  const doc = await Differentiator.findById(id).lean();
  return doc ? serialize(doc) : null;
}
