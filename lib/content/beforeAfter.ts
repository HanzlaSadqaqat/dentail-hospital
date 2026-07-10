import { dbConnect } from "@/lib/mongodb";
import BeforeAfterCase, { IBeforeAfterCase } from "@/models/BeforeAfterCase";

export type BeforeAfterCaseDTO = IBeforeAfterCase & { id: string };

function serialize(doc: any): BeforeAfterCaseDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export async function getBeforeAfterCases() {
  await dbConnect();
  const docs = await BeforeAfterCase.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
}

export async function getBeforeAfterCaseById(id: string) {
  await dbConnect();
  const doc = await BeforeAfterCase.findById(id).lean();
  return doc ? serialize(doc) : null;
}
