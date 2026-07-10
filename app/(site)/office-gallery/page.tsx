import Image from "next/image";
import { getGalleryImages } from "@/lib/content/gallery";
import { PageHero, CTABand } from "@/components/UI";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Office Tour — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Gallery() {
  const officeGallery = await getGalleryImages();
  return (
    <>
      <PageHero eyebrow="Office Tour" title="Take a look around our office"
        intro="A clean, modern, and welcoming space designed to keep you comfortable from the moment you walk in." />
      <section className="container-x py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-2">
          {officeGallery.map((img, i) => (
            <Reveal key={img.id} delay={(i % 4) * 70}>
              <div className="mb-5 overflow-hidden rounded-4xl shadow-card ring-1 ring-petrol/5">
                <Image src={img.imageUrl} alt={img.caption || `Delaware Dental Solutions office ${i + 1}`} width={640} height={460} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" unoptimized />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
