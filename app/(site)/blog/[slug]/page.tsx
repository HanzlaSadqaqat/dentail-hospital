import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { PageHero, CTABand } from "@/components/UI";
import Reveal from "@/components/Reveal";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  return { title: post ? `${post.title} — Dentist in Bear, DE` : "Blog Post" };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.tag} title={post.title} intro={post.excerpt} />
      <section className="container-x py-20">
        <Reveal>
          <Link href="/blog" className="text-sm font-semibold text-coral">← Back to all posts</Link>
          <article className="markdown-body mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </article>
        </Reveal>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
