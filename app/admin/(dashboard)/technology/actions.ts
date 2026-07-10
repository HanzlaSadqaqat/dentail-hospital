"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Technology from "@/models/Technology";

function revalidateTechnologyPaths() {
  revalidatePath("/");
  revalidatePath("/technology");
}

export async function createTechnology(formData: FormData) {
  await dbConnect();
  await Technology.create({
    name: String(formData.get("name") || "").trim(),
    desc: String(formData.get("desc") || "").trim(),
    image: String(formData.get("image") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidateTechnologyPaths();
  redirect("/admin/technology");
}

export async function updateTechnology(id: string, formData: FormData) {
  await dbConnect();
  await Technology.findByIdAndUpdate(id, {
    name: String(formData.get("name") || "").trim(),
    desc: String(formData.get("desc") || "").trim(),
    image: String(formData.get("image") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidateTechnologyPaths();
  redirect("/admin/technology");
}

export async function deleteTechnology(id: string) {
  await dbConnect();
  await Technology.findByIdAndDelete(id);
  revalidateTechnologyPaths();
  redirect("/admin/technology");
}
