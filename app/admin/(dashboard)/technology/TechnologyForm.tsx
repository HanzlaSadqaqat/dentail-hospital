import ImageField from "@/components/admin/ImageField";
import type { TechnologyDTO } from "@/lib/content/technology";

export default function TechnologyForm({
  action,
  item,
}: {
  action: (formData: FormData) => void;
  item?: TechnologyDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <div>
        <label className="admin-label" htmlFor="name">Name</label>
        <input id="name" name="name" required defaultValue={item?.name} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="desc">Description</label>
        <textarea id="desc" name="desc" required rows={3} defaultValue={item?.desc} className="admin-field" />
      </div>
      <ImageField name="image" label="Image" defaultValue={item?.image} />
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={item?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
