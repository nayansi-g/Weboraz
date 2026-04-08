import { ArrowRight, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F4] text-slate-950">
      <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 md:px-10 lg:px-16">


        <div className="mx-auto grid mt-20 max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d9d9] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0c5a43]">
              <Sparkles className="h-4 w-4" />
              Coming Soon
            </div>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,5.2rem)] font-semibold leading-[0.95] text-[#1f2a37]">
              Our Projects Library
              <br />
              Is Almost Here
            </h1>
            <p className="mt-5 max-w-xl text-base text-gray-700 sm:text-lg">
              We&apos;re curating our best website launches, web apps, and redesigns. The full gallery launches soon with deep dives and live results.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Case studies with outcomes",
                "Design and UX breakdowns",
                "Product and build highlights",
                "Before-and-after redesigns",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#d9d9d9] bg-white/60 px-5 py-4 text-sm text-[#1f2a37]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d9d9d9] bg-white/70 p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37]">
              Be first to explore
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Join the early access list and we&apos;ll notify you when the projects page goes live.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
              />
              <textarea
                rows={4}
                placeholder="What kind of projects are you most excited about?"
                className="w-full rounded-[20px] border border-[#d9d9d9] bg-transparent px-5 py-4 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#004d33] px-6 text-sm font-semibold text-white transition hover:bg-[#003826]"
              >
                Notify Me
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 rounded-[20px] border border-[#d9d9d9] bg-[#f4dc57]/40 px-4 py-3 text-xs text-[#1f2a37]">
              Launching soon with new projects added every month.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
