import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import blogData from "../../../Blog.json"


const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString))

export default function BlogPage() {
  const blogs = blogData.blogs || []
  const featuredBlogs = blogs.filter((blog) => blog.featured)
  const latestBlogs = blogs.filter((blog) => !blog.featured)
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <main className="bg-[#F5F6F4] text-gray-900">
      <section className=" px-4 pb-12  text-center sm:px-6 md:rounded-b-[80px] md:pb-16 pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Digital Marketing Blog for Ecommerce Growth and Performance
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Explore actionable insights on ecommerce growth, performance marketing, SEO, conversion optimization, analytics, and automation.
          </p>
          <a   href="https://wa.me/919897165137"
  target="_blank"
  rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Your Free Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 md:pt-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Blog Categories</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-800"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-4 sm:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Featured Articles</h2>
          <p className="text-sm text-gray-600">Editor-picked growth guides</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read Article
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 md:pb-54">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Latest Articles</h2>
          <p className="text-sm text-gray-600">Fresh ecommerce growth insights</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
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
              <h3 className="mt-2 text-lg font-semibold leading-tight">{blog.title}</h3>
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
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Read Article
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
