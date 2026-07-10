import Link from "next/link";
import { getBlogPosts } from "@/lib/content/blog";
import { PageHero, CTABand } from "@/components/UI";
import { Arrow } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Blog — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Blog() {
  const posts = await getBlogPosts();
  return (
    <>
      <PageHero eyebrow="Our Blog" title="Dental knowledge, tools, and care"
        intro="Tips and insights from our team to help you and your family keep healthy, confident smiles." />
      <section className="container-x py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">{p.tag}</span>
                <h2 className="mt-2 font-display text-xl font-bold text-petrol">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">Read more <Arrow width={15} height={15} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
