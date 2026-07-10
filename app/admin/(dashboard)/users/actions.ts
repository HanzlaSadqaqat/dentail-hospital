"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { hashPassword } from "@/lib/auth";

export async function createAdminUser(formData: FormData) {
  await dbConnect();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const name = String(formData.get("name") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password || !name) return;

  const passwordHash = await hashPassword(password);
  await AdminUser.create({ email, name, passwordHash });
  redirect("/admin/users");
}

export async function deleteAdminUser(id: string) {
  await dbConnect();
  const count = await AdminUser.countDocuments();
  if (count <= 1) return; // never delete the last admin
  await AdminUser.findByIdAndDelete(id);
  redirect("/admin/users");
}
