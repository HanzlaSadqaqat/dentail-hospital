import { dbConnect } from "@/lib/mongodb";
import GalleryImage, { IGalleryImage } from "@/models/GalleryImage";

export type GalleryImageDTO = IGalleryImage & { id: string };

function serialize(doc: any): GalleryImageDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export async function getGalleryImages() {
  await dbConnect();
  const docs = await GalleryImage.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
}

export async function getGalleryImageById(id: string) {
  await dbConnect();
  const doc = await GalleryImage.findById(id).lean();
  return doc ? serialize(doc) : null;
}
