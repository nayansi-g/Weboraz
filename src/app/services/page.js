import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Headphones,
  MessageCircle,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import BannerHero from "@/components/BannerHero";
import ContactFaqSection from "@/components/Contact";

const services = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional, modern websites that build trust and drive inquiries.",
    icon: MonitorSmartphone,
    href: "/services#services-list",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting pages for campaigns, launches, and lead gen.",
    icon: Headphones,
    href: "/services#services-list",
  },
  {
    id: "web-applications",
    title: "Custom Web Apps",
    description:
      "Web applications that automate workflows and scale with you.",
    icon: BadgeCheck,
    href: "/services#services-list",
  },
  {
    id: "ecommerce-websites",
    title: "Ecommerce Websites",
    description:
      "Storefronts built for speed, clarity, and conversions.",
    icon: MessageCircle,
    href: "/services#services-list",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Refresh your current site with a clean, modern experience.",
    icon: Smartphone,
    href: "/services#services-list",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, fixes, and improvements after launch.",
    icon: Workflow,
    href: "/services#services-list",
  },
];


const processSteps = [
  {
    title: "Discovery",
    description: "We map goals, audience, and technical requirements.",
    icon: Sparkles,
  },
  {
    title: "Design & Build",
    description: "We craft the UI and develop the site or app with care.",
    icon: BarChart3,
  },
  {
    title: "Launch & Improve",
    description: "We test, launch, and support continuous upgrades.",
    icon: CheckCircle2,
  },
];


const outcomes = [
  { label: "Typical launch", value: "2-4 wks" },
  { label: "Mobile ready", value: "100%" },
  { label: "Performance focus", value: "Fast" },
  { label: "Support", value: "Ongoing" },
];


export default function ServicesGridSection() {
  return (
    <div className="bg-[#F5F6F4]">
         <BannerHero heading="Our Services" pagename="Services" />
    <section
      id="services-list"
      className="bg-[#F5F6F4] px-4 py-10  sm:py-12 md:px-10 lg:px-16 xl:py-16"
    >
       
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={`${service.title}-${index}`}
              id={service.id}
              className="group rounded-[24px] bg-white hover:bg-[#004b2d] text-black hover:text-gray-100 px-6 py-8  text-center transition duration-300 hover:-translate-y-1 hover:shadow-md sm:px-7 sm:py-9 lg:px-8 lg:py-10"
            >
              <div className="mx-auto mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#dddddd] transition duration-300 group-hover:bg-white">
                <Icon className="h-7 w-7 text-[#1f2937]" strokeWidth={1.8} />
              </div>

              <h3 className="text-[28px] font-medium leading-[1.2] tracking-tight  sm:text-[30px]">
                {service.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[260px] text-base leading-8 ">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-7 inline-flex items-center justify-center gap-2 text-base font-medium text-black transition hover:text-gray-200"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>

    <section className="bg-[#F5F6F4] px-4 pb-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0c5a43]">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">
              Clear, Fast, Business-Focused
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-700">
            We keep you informed with clear milestones, timelines, and deliverables.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-[24px] border border-[#d9d9d9] bg-white px-6 py-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4dc57]">
                  <Icon className="h-6 w-6 text-[#1f1f1f]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#1f2a37]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-[#F5F6F4] px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#d9d9d9] bg-white px-6 py-10 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0c5a43]">
              What You Can Expect
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">
              Web experiences that grow with you
            </h2>
            <p className="mt-4 text-sm text-gray-700">
              We build reliable digital foundations that support growth, credibility, and conversion.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-[#d9d9d9] bg-[#f6f6f6] px-5 py-4"
                >
                  <p className="text-2xl font-semibold text-[#1f2a37]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#d9d9d9] bg-[#004b2d] px-6 py-8 text-white">
            <h3 className="text-2xl font-semibold leading-tight">
              Ready to see what&apos;s possible?
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Book a free consultation and get a tailored plan for your website or web app.
            </p>
            <Link
              href="/book_a_demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#004b2d] transition hover:opacity-90"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <ContactFaqSection />
    </div>
  );
}
