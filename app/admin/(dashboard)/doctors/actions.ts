"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Doctor from "@/models/Doctor";

function linesToArray(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function revalidateDoctorPaths() {
  revalidatePath("/");
  revalidatePath("/meet-our-team");
  revalidatePath("/dr-weidong-yang");
  revalidatePath("/dr-emma-yang");
}

export async function createDoctor(formData: FormData) {
  await dbConnect();
  await Doctor.create({
    slug: String(formData.get("slug") || "").trim(),
    name: String(formData.get("name") || "").trim(),
    credential: String(formData.get("credential") || "").trim(),
    role: String(formData.get("role") || "").trim(),
    image: String(formData.get("image") || "").trim(),
    short: String(formData.get("short") || "").trim(),
    bio: linesToArray(formData.get("bio")),
    memberships: linesToArray(formData.get("memberships")),
    interests: String(formData.get("interests") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidateDoctorPaths();
  redirect("/admin/doctors");
}

export async function updateDoctor(id: string, formData: FormData) {
  await dbConnect();
  await Doctor.findByIdAndUpdate(id, {
    slug: String(formData.get("slug") || "").trim(),
    name: String(formData.get("name") || "").trim(),
    credential: String(formData.get("credential") || "").trim(),
    role: String(formData.get("role") || "").trim(),
    image: String(formData.get("image") || "").trim(),
    short: String(formData.get("short") || "").trim(),
    bio: linesToArray(formData.get("bio")),
    memberships: linesToArray(formData.get("memberships")),
    interests: String(formData.get("interests") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidateDoctorPaths();
  redirect("/admin/doctors");
}

export async function deleteDoctor(id: string) {
  await dbConnect();
  await Doctor.findByIdAndDelete(id);
  revalidateDoctorPaths();
  redirect("/admin/doctors");
}
