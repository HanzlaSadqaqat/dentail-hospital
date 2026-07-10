import BlogForm from "../BlogForm";
import { createBlogPost } from "../actions";

export const metadata = { title: "New Blog Post — Admin" };

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Blog Post</h1>
      <div className="mt-6 max-w-3xl">
        <BlogForm action={createBlogPost} />
      </div>
    </div>
  );
}
