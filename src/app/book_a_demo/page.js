import BannerHero from "@/components/BannerHero";
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  "Custom growth roadmap tailored to your business goals",
  "Channel audit across paid, organic, and retention",
  "Conversion and creative performance review",
  "Measurement and tracking recommendations",
  "Clear next steps and timeline after the call",
];


export default function BookADemoPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F4] text-slate-950">
      <BannerHero heading="Book A Free Demo" pagename="Book A Demo" />

      <section className="px-4 pb-12 pt-10 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0c5a43]">
                Consultation
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl lg:text-5xl">
                See Exactly How We&apos;ll Grow Your Revenue
              </h1>
              <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
                Book a free 30-minute demo with our growth team. We&apos;ll walk through your
                current funnel, uncover quick wins, and map a scalable plan tailored to your goals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c5a43]/10">
                      <Clock className="h-5 w-5 text-[#0c5a43]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="text-lg font-semibold text-[#1f2a37]">30 minutes</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c5a43]/10">
                      <ShieldCheck className="h-5 w-5 text-[#0c5a43]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">No obligation</p>
                      <p className="text-lg font-semibold text-[#1f2a37]">Completely free</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-[#1f2a37]">What you&apos;ll get</h2>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-[#0c5a43]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>

            <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-6 sm:p-8">
              <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37]">
                Book your free consultation
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Fill out the form and we&apos;ll reach out to confirm your preferred time.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
                  />
                  <input
                    type="url"
                    placeholder="Website URL"
                    className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Budget Range"
                    className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
                  />
                  <input
                    type="text"
                    placeholder="Primary Goal"
                    className="h-12 w-full rounded-full border border-[#d9d9d9] bg-transparent px-5 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
                  />
                </div>

                <textarea
                  rows={5}
                  placeholder="Tell us about your website or app goals"
                  className="w-full rounded-[20px] border border-[#d9d9d9] bg-transparent px-5 py-4 text-sm text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#004d33] px-6 text-sm font-semibold text-white transition hover:bg-[#003826]"
                >
                  Book My Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[28px] border border-[#d9d9d9] bg-white/50 px-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-semibold text-[#1f2a37] sm:text-4xl">
              Prefer to talk directly?
            </h2>
            <p className="mt-2 text-gray-700">
              Call us and we&apos;ll reserve a slot right away.
            </p>
          </div>
          <a href="tel:+919000000000">
            <button className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition hover:opacity-90">
              Call Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
