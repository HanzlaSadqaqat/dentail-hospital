import { cache } from "react";
import { dbConnect } from "@/lib/mongodb";
import Practice, { IPractice, PRACTICE_SINGLETON_ID } from "@/models/Practice";

export const getPractice = cache(async (): Promise<Omit<IPractice, "_id">> => {
  await dbConnect();
  const doc = await Practice.findById(PRACTICE_SINGLETON_ID).lean();
  if (!doc) throw new Error("Practice singleton not seeded");
  const { _id, ...rest } = doc;
  return rest;
});
