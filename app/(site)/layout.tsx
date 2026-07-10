import { getPractice } from "@/lib/content/practice";
import { getDoctors } from "@/lib/content/doctors";
import { getServices } from "@/lib/content/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [practice, doctors, services] = await Promise.all([
    getPractice(),
    getDoctors(),
    getServices(),
  ]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-petrol focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header practice={practice} doctors={doctors} services={services} />
      <main id="main">{children}</main>
      <Footer practice={practice} />
    </>
  );
}
