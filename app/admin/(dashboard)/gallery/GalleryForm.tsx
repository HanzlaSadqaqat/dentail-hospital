import ImageField from "@/components/admin/ImageField";
import type { GalleryImageDTO } from "@/lib/content/gallery";

export default function GalleryForm({
  action,
  image,
}: {
  action: (formData: FormData) => void;
  image?: GalleryImageDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <ImageField name="imageUrl" label="Image" defaultValue={image?.imageUrl} />
      <div>
        <label className="admin-label" htmlFor="caption">Caption (optional)</label>
        <input id="caption" name="caption" defaultValue={image?.caption} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={image?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
