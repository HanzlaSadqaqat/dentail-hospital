"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { verifyPassword, createSession } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    redirect("/admin/login?error=1");
  }

  await dbConnect();
  const user = await AdminUser.findOne({ email }).lean();
  if (!user) {
    redirect("/admin/login?error=1");
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    redirect("/admin/login?error=1");
  }

  await createSession({ sub: String(user._id), email: user.email, name: user.name });
  redirect("/admin");
}
