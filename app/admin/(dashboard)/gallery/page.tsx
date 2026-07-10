import Link from "next/link";
import Image from "next/image";
import { getGalleryImages } from "@/lib/content/gallery";
import { deleteGalleryImage } from "./actions";

export const metadata = { title: "Gallery — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const images = await getGalleryImages();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Office Gallery</h1>
        <Link href="/admin/gallery/new" className="btn-coral">Add Image</Link>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div key={img.id} className="card overflow-hidden p-0">
            <div className="relative aspect-video bg-sand">
              {img.imageUrl && (
                <Image src={img.imageUrl} alt={img.caption || "Gallery image"} fill className="object-cover" />
              )}
            </div>
            <div className="flex items-center justify-between gap-2 p-3">
              <p className="text-sm text-ink/60 truncate">{img.caption || <span className="italic">No caption</span>}</p>
              <div className="flex shrink-0 gap-2">
                <Link href={`/admin/gallery/${img.id}/edit`} className="btn-ghost text-xs">Edit</Link>
                <form action={deleteGalleryImage.bind(null, img.id)}>
                  <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-xs">Delete</button>
                </form>
              </div>
            </div>
          </div>
        ))}
        {images.length === 0 && <p className="text-ink/60">No gallery images yet.</p>}
      </div>
    </div>
  );
}
