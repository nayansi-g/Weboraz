import Image from "next/image";
import Interactive from "@/components/animations/Interactive";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";
import blogData from "../../Blog.json"
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString))

export default function RecentBlogSection() {
      const blogs = blogData.blogs || []
      const featuredBlogs = blogs.filter((blog) => blog.featured)
      const latestBlogs = blogs.filter((blog) => !blog.featured)
      const categories = [...new Set(blogs.map((blog) => blog.category))]
  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-12  lg:py-16">
      <div className="mx-auto max-w-7xl pb-56">
        <Reveal className="mb-10 text-center sm:mb-12 lg:mb-14">
          <h1 className="mb-20 text-center text-4xl font-bold uppercase leading-[1.1] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[3.9rem]">
            Our Recent Blog
          </h1>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
           
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 overflow-hidden rounded-xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs font-medium text-gray-600">{blog.category}</p>
              <h3 className="mt-2 text-xl font-semibold leading-tight">{blog.title}</h3>
              <p className="mt-3 text-sm text-gray-700">{blog.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                <span>{formatDate(blog.date)}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#004B2D] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read Article
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        
        </StaggerGroup>
      </div>
    </section>
  );
}
