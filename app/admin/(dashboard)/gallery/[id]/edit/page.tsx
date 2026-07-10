import { notFound } from "next/navigation";
import { getGalleryImageById } from "@/lib/content/gallery";
import GalleryForm from "../../GalleryForm";
import { updateGalleryImage } from "../../actions";

export const metadata = { title: "Edit Gallery Image — Admin" };

export default async function EditGalleryPage({ params }: { params: { id: string } }) {
  const image = await getGalleryImageById(params.id);
  if (!image) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Gallery Image</h1>
      <div className="mt-6 max-w-2xl">
        <GalleryForm action={updateGalleryImage.bind(null, params.id)} image={image} />
      </div>
    </div>
  );
}
