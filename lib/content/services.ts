import { cache } from "react";
import { dbConnect } from "@/lib/mongodb";
import Service, { IService } from "@/models/Service";

export type ServiceDTO = Omit<IService, never> & { id: string };

function serialize(doc: any): ServiceDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export const getServices = cache(async () => {
  await dbConnect();
  const docs = await Service.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
});

export const getServiceBySlug = cache(async (slug: string) => {
  await dbConnect();
  const doc = await Service.findOne({ slug }).lean();
  return doc ? serialize(doc) : null;
});

export async function getServiceById(id: string) {
  await dbConnect();
  const doc = await Service.findById(id).lean();
  return doc ? serialize(doc) : null;
}
