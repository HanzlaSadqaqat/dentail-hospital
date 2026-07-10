import "dotenv/config";
import bcrypt from "bcryptjs";
import { dbConnect } from "../lib/mongodb";
import { practice, doctors, services, technology, officeGallery, differentiators, teamImage } from "../lib/data";
import Practice, { PRACTICE_SINGLETON_ID } from "../models/Practice";
import Doctor from "../models/Doctor";
import Service from "../models/Service";
import Technology from "../models/Technology";
import GalleryImage from "../models/GalleryImage";
import Differentiator from "../models/Differentiator";
import Review from "../models/Review";
import BlogPost from "../models/BlogPost";
import AdminUser from "../models/AdminUser";

const reviews = [
  { q: "The whole team is gentle, friendly, and incredibly thorough. Honestly the best dental experience I've had in years.", a: "Verified Patient" },
  { q: "Dr. Yang explained every step clearly and made me feel completely at ease. I actually look forward to my visits now.", a: "Verified Patient" },
  { q: "Clean, modern office with staff who genuinely care. They took wonderful care of my whole family.", a: "Verified Patient" },
  { q: "I needed an implant and was nervous, but the team made the entire process smooth and painless. Highly recommend.", a: "Verified Patient" },
  { q: "They got me in quickly for an emergency and fixed the problem the same day. So grateful for this practice.", a: "Verified Patient" },
  { q: "Friendly front desk, short wait times, and excellent work. This is how a dental office should be run.", a: "Verified Patient" },
];

const posts = [
  { t: "How often should you really visit the dentist?", d: "The honest answer, and why twice a year is the right rhythm for most families.", tag: "Preventive Care" },
  { t: "5 signs you might need a dental crown", d: "From cracks to large fillings — when a crown is the right way to protect a tooth.", tag: "Restorative" },
  { t: "Whitening that actually works", d: "Why professional whitening outperforms drugstore kits, safely.", tag: "Cosmetic" },
  { t: "Are dental implants right for you?", d: "What to expect from the most natural, long-lasting way to replace a missing tooth.", tag: "Implants" },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function seed() {
  await dbConnect();

  await Practice.findByIdAndUpdate(
    PRACTICE_SINGLETON_ID,
    { ...practice, teamImage },
    { upsert: true, new: true }
  );
  console.log("Practice: seeded");

  for (const [i, d] of doctors.entries()) {
    await Doctor.findOneAndUpdate({ slug: d.slug }, { ...d, order: i }, { upsert: true });
  }
  console.log(`Doctors: ${doctors.length} seeded`);

  for (const [i, s] of services.entries()) {
    await Service.findOneAndUpdate({ slug: s.slug }, { ...s, order: i }, { upsert: true });
  }
  console.log(`Services: ${services.length} seeded`);

  await Technology.deleteMany({});
  await Technology.insertMany(technology.map((t, i) => ({ ...t, order: i })));
  console.log(`Technology: ${technology.length} seeded`);

  await GalleryImage.deleteMany({});
  await GalleryImage.insertMany(officeGallery.map((url, i) => ({ imageUrl: url, order: i })));
  console.log(`GalleryImage (office): ${officeGallery.length} seeded`);

  await Differentiator.deleteMany({});
  await Differentiator.insertMany(differentiators.map((d, i) => ({ ...d, order: i })));
  console.log(`Differentiators: ${differentiators.length} seeded`);

  await Review.deleteMany({});
  await Review.insertMany(
    reviews.map((r, i) => ({ quote: r.q, author: r.a, rating: 5, order: i }))
  );
  console.log(`Reviews: ${reviews.length} seeded`);

  for (const [i, p] of posts.entries()) {
    const slug = slugify(p.t);
    await BlogPost.findOneAndUpdate(
      { slug },
      {
        slug,
        title: p.t,
        excerpt: p.d,
        body: p.d,
        tag: p.tag,
        publishedAt: new Date(),
      },
      { upsert: true }
    );
  }
  console.log(`BlogPost: ${posts.length} seeded`);

  const adminCount = await AdminUser.countDocuments();
  if (adminCount === 0) {
    const email = process.env.SEED_ADMIN_EMAIL;
    const password = process.env.SEED_ADMIN_PASSWORD;
    if (email && password) {
      const passwordHash = await bcrypt.hash(password, 12);
      await AdminUser.create({ email: email.toLowerCase(), passwordHash, name: "Admin" });
      console.log(`AdminUser: bootstrapped ${email}`);
    } else {
      console.log("AdminUser: skipped (SEED_ADMIN_EMAIL/SEED_ADMIN_PASSWORD not set)");
    }
  } else {
    console.log(`AdminUser: ${adminCount} already exist, skipping bootstrap`);
  }

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
