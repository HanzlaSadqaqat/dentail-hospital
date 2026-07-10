import ImageField from "@/components/admin/ImageField";
import type { DoctorDTO } from "@/lib/content/doctors";

export default function DoctorForm({
  action,
  doctor,
}: {
  action: (formData: FormData) => void;
  doctor?: DoctorDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="name">Name</label>
          <input id="name" name="name" required defaultValue={doctor?.name} className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="credential">Credential</label>
          <input id="credential" name="credential" required defaultValue={doctor?.credential} placeholder="DMD" className="admin-field" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="slug">Slug</label>
          <input id="slug" name="slug" required defaultValue={doctor?.slug} placeholder="dr-jane-doe" className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="role">Role</label>
          <input id="role" name="role" required defaultValue={doctor?.role} placeholder="General Dentist" className="admin-field" />
        </div>
      </div>
      <ImageField name="image" label="Photo" defaultValue={doctor?.image} />
      <div>
        <label className="admin-label" htmlFor="short">Short bio (for cards)</label>
        <textarea id="short" name="short" required rows={2} defaultValue={doctor?.short} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="bio">Full bio (one paragraph per line)</label>
        <textarea id="bio" name="bio" rows={6} defaultValue={doctor?.bio?.join("\n")} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="memberships">Memberships (one per line)</label>
        <textarea id="memberships" name="memberships" rows={3} defaultValue={doctor?.memberships?.join("\n")} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="interests">Interests (optional)</label>
        <input id="interests" name="interests" defaultValue={doctor?.interests} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={doctor?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
