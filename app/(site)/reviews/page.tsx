import { getPractice } from "@/lib/content/practice";
import { getReviews } from "@/lib/content/reviews";
import { PageHero, CTABand } from "@/components/UI";
import { Star } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Reviews — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Reviews() {
  const [practice, reviews] = await Promise.all([getPractice(), getReviews()]);
  return (
    <>
      <PageHero eyebrow="Amazing Reviews" title="What our patients are saying"
        intro="We're proud to be a 5-star rated dental practice in Bear, DE. Here's a look at the experiences our patients share." />
      <section className="container-x py-20">
        <Reveal>
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <div className="flex text-coral">{[0,1,2,3,4].map((i)=><Star key={i} width={30} height={30} />)}</div>
            <p className="font-display text-2xl font-bold text-petrol">5 Star Customer Reviews</p>
            <div className="flex flex-wrap justify-center gap-3">
              {practice.socials.map((s)=>(
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">Review us on {s.name}</a>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 80}>
              <figure className="card h-full p-6">
                <div className="flex text-coral">{Array.from({ length: r.rating }).map((_, s) => <Star key={s} width={15} height={15} />)}</div>
                <blockquote className="mt-3 leading-relaxed text-ink/75">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-petrol">— {r.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
