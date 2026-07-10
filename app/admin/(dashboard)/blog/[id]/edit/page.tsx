import { notFound } from "next/navigation";
import { getBlogPostById } from "@/lib/content/blog";
import BlogForm from "../../BlogForm";
import { updateBlogPost } from "../../actions";

export const metadata = { title: "Edit Blog Post — Admin" };

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPostById(params.id);
  if (!post) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Blog Post</h1>
      <div className="mt-6 max-w-3xl">
        <BlogForm action={updateBlogPost.bind(null, params.id)} post={post} />
      </div>
    </div>
  );
}
