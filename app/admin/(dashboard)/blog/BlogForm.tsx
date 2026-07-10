import ImageField from "@/components/admin/ImageField";
import type { BlogPostDTO } from "@/lib/content/blog";

export default function BlogForm({
  action,
  post,
}: {
  action: (formData: FormData) => void;
  post?: BlogPostDTO;
}) {
  const defaultDate = post?.publishedAt
    ? new Date(post.publishedAt).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="title">Title</label>
          <input id="title" name="title" required defaultValue={post?.title} className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="slug">Slug</label>
          <input id="slug" name="slug" required defaultValue={post?.slug} placeholder="my-blog-post" className="admin-field" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="tag">Tag / category</label>
          <input id="tag" name="tag" required defaultValue={post?.tag} placeholder="Preventive Care" className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="publishedAt">Published date</label>
          <input id="publishedAt" name="publishedAt" type="date" defaultValue={defaultDate} className="admin-field" />
        </div>
      </div>
      <div>
        <label className="admin-label" htmlFor="excerpt">Excerpt (shown on listing page)</label>
        <textarea id="excerpt" name="excerpt" required rows={2} defaultValue={post?.excerpt} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="body">Body (Markdown)</label>
        <textarea id="body" name="body" rows={16} defaultValue={post?.body} className="admin-field font-mono text-sm" />
      </div>
      <ImageField name="image" label="Cover image (optional)" defaultValue={post?.image} />
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
