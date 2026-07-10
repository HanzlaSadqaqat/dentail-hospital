import ImageField from "@/components/admin/ImageField";
import type { ServiceDTO } from "@/lib/content/services";

export default function ServiceForm({
  action,
  service,
}: {
  action: (formData: FormData) => void;
  service?: ServiceDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="name">Name</label>
          <input id="name" name="name" required defaultValue={service?.name} className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="slug">Slug</label>
          <input id="slug" name="slug" required defaultValue={service?.slug} placeholder="teeth-whitening" className="admin-field" />
        </div>
      </div>
      <div>
        <label className="admin-label" htmlFor="category">Category</label>
        <select id="category" name="category" defaultValue={service?.category ?? "General"} className="admin-field">
          <option value="General">General</option>
          <option value="Cosmetic">Cosmetic</option>
          <option value="Restorative">Restorative</option>
          <option value="Specialty">Specialty</option>
        </select>
      </div>
      <div>
        <label className="admin-label" htmlFor="blurb">Blurb (short description)</label>
        <textarea id="blurb" name="blurb" required rows={2} defaultValue={service?.blurb} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="body">Body paragraphs (one per line)</label>
        <textarea id="body" name="body" rows={6} defaultValue={service?.body?.join("\n")} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="highlights">Highlights / bullet points (one per line)</label>
        <textarea id="highlights" name="highlights" rows={4} defaultValue={service?.highlights?.join("\n")} className="admin-field" />
      </div>
      <ImageField name="image" label="Image" defaultValue={service?.image} />
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={service?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
