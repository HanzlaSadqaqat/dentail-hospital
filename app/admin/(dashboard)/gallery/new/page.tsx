import GalleryForm from "../GalleryForm";
import { createGalleryImage } from "../actions";

export const metadata = { title: "Add Gallery Image — Admin" };

export default function NewGalleryPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Add Gallery Image</h1>
      <div className="mt-6 max-w-2xl">
        <GalleryForm action={createGalleryImage} />
      </div>
    </div>
  );
}
