import { getServices } from "@/lib/content/services";
import { PageHero, ServiceCard, CTABand } from "@/components/UI";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Dental Services in Bear, DE" };
export const revalidate = 3600;

const categories = ["General", "Cosmetic", "Restorative", "Specialty"] as const;

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero eyebrow="Treatments & Services" title="Comprehensive dentistry, all in one place"
        intro="From preventive cleanings to implants, orthodontics, and full smile makeovers — explore the full range of care we provide for Bear and the greater Newark area." />
      <section className="container-x py-20">
        {categories.map((cat) => {
          const items = services.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} className="mb-16 last:mb-0">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-petrol">
                  {cat} <span className="text-aqua">Dentistry</span>
                </h2>
              </Reveal>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 70}>
                    <ServiceCard slug={s.slug} name={s.name} blurb={s.blurb} category={s.category} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
