import Link from "next/link";
import { getBlogPosts } from "@/lib/content/blog";
import { deleteBlogPost } from "./actions";

export const metadata = { title: "Blog — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Blog Posts</h1>
        <Link href="/admin/blog/new" className="btn-coral">New Post</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {posts.map((p) => (
          <div key={p.id} className="card flex items-center justify-between gap-4 p-5">
            <div className="min-w-0">
              <p className="font-display font-bold text-petrol truncate">{p.title}</p>
              <p className="text-sm text-ink/60">
                {p.tag} · {new Date(p.publishedAt).toLocaleDateString()} · /{p.slug}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/blog/${p.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteBlogPost.bind(null, p.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-ink/60">No blog posts yet.</p>}
      </div>
    </div>
  );
}
