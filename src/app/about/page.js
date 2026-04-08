import BannerHero from "@/components/BannerHero";
import { ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: BadgeCheck,
    title: "Professional websites that build trust",
  },
  {
    icon: Smartphone,
    title: "Responsive design for every device",
  },
  {
    icon: BarChart3,
    title: "Custom web apps for growth",
  },
];

      const chooseItems = [
  {
    id: "01",
    title: "Build a professional web presence",
    active: false,
  },
  {
    id: "02",
    title: "Design that converts visitors",
    active: true,
  },
  {
    id: "03",
    title: "Development you can scale with",
    active: false,
  },
];

export default function About() {
  return (
    <div>
         <BannerHero heading="About Weboraz" pagename="About" />
    <section className="bg-[#F5F6F4] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 xl:py-20">
        
      <div className="mx-auto max-w-7xl">
        {/* top label */}
        <div className="mb-8 flex items-center gap-4 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
            About Weboraz
          </span>
          <span className="h-[1.5px] w-10 bg-[#0d5a43] sm:w-12" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0d5a43]" />
        </div>

        {/* top content */}
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.7fr] lg:items-start lg:gap-16">
          <div className="relative">
            <span className="pointer-events-none absolute left-0 top-8 hidden select-none text-[90px] font-semibold capitalize leading-none text-black/[0.03] md:block lg:text-[110px] xl:text-[120px]">
              about us
            </span>

            <h2 className="relative z-10 max-w-[700px] text-4xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[72px]">
              Build Your
              <br />
              Online Presence
              <br />
              With Weboraz
            </h2>
          </div>

          <div className="max-w-[420px] lg:pt-3">
            <p className="text-base leading-8 text-black/85 sm:text-lg">
              Weboraz creates modern websites and web applications for startups, clinics, institutions, and growing companies that need a credible online presence.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#0d5a43] px-7 text-sm font-semibold text-[#0d5a43] transition duration-300 hover:bg-[#0d5a43] hover:text-white sm:h-16 sm:px-8 sm:text-base"
            >
              Discover Weboraz
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* bottom feature cards */}
        <div className="mt-12 rounded-[28px] border border-black/10 bg-transparent px-6 py-8 sm:mt-14 sm:px-8 sm:py-10 md:px-10 lg:mt-16 lg:px-0 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-10 lg:min-h-[190px] lg:px-10 lg:py-12 ${
                    index !== features.length - 1
                      ? "border-b border-black/10 lg:border-b-0 lg:border-r lg:border-gray-300"
                      : ""
                  }`}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black/5 sm:h-[74px] sm:w-[74px]">
                    <Icon className="h-7 w-7 text-[#1f2937]" strokeWidth={1.8} />
                  </div>

                  <h3 className="max-w-[280px] text-xl font-medium leading-snug text-black sm:text-[22px]">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>



    <div className="bg-[#F5F6F4] py-12  sm:py-14  xl:py-16 ">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#c8f07a] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-8 lg:py-8 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10 xl:gap-12">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] lg:h-full lg:min-h-[560px]">
            <Image
              src="/team-meeting.jpg"
              alt="Person working on laptop"
              width={700}
              height={900}
              className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px] lg:h-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
                Why Weboraz
              </span>
              <span className="h-[1.5px] w-10 bg-[#0b4b38] sm:w-12" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#0b4b38]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-4xl font-bold uppercase leading-[1.02] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px]">
              Experience
            
              Modern Web
             
              Solutions
            </h2>

            {/* Cards */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {chooseItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-[20px] border border-[#a8d866] bg-transparent px-4 py-2 sm:px-6 sm:py-2 md:px-7 md:py-2"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="min-w-[42px] text-3xl font-medium leading-none text-[#9dcb61] sm:min-w-[52px] sm:text-4xl">
                      {item.id}
                    </span>

                    <p className="text-base font-medium leading-snug text-black sm:text-lg md:text:xl md:leading-[1.3]">
                      {item.title}
                    </p>
                  </div>

                  <button
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition sm:h-14 sm:w-14 ${
                      item.active
                        ? "bg-[#003b2f] text-white"
                        : "bg-white text-[#0f172a]"
                    }`}
                    aria-label={`Open ${item.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <div className="bg-[#F5F6F4]  pb-16 ">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-black/10 bg-white px-6 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Clients Served", value: "120+" },
            { label: "Avg. ROAS Lift", value: "3.6x" },
            { label: "Campaigns Launched", value: "540+" },
            { label: "Team Experience", value: "10+ yrs" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[20px] border border-black/10 bg-[#f6f6f6] px-5 py-6 text-center">
              <p className="text-3xl font-semibold text-black">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-[#F5F6F4] px-4 pb-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
              Built On Clarity And Performance
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/80">
            We work as an extension of your team and keep every decision tied to business results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Radical Transparency",
              text: "Clear reporting, honest insights, and shared accountability.",
            },
            {
              title: "Growth Experiments",
              text: "Rapid testing and data-driven iteration across every channel.",
            },
            {
              title: "Long-Term Partnerships",
              text: "We align on goals, timelines, and outcomes from day one.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-black/10 bg-white px-6 py-7">
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-[#F5F6F4] px-4 pb-16 ">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[28px] border border-black/10 bg-white px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
            Leadership
          </p>
          <h2 className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
            People Who Obsess Over Growth
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/80">
            Our strategists, creatives, and performance specialists work together to deliver scalable systems, not one-off wins.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { name: "Aisha Verma", role: "Head of Strategy" },
              { name: "Rahul Mehta", role: "Performance Lead" },
              { name: "Sarah Cruz", role: "Creative Director" },
              { name: "Neha Sharma", role: "Client Success" },
            ].map((member) => (
              <div key={member.name} className="rounded-[20px] border border-black/10 bg-[#f6f6f6] px-5 py-4">
                <p className="text-base font-semibold text-black">{member.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-black/60">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#c8f07a] px-6 py-10 sm:px-8 sm:py-12">
          <h3 className="text-2xl font-semibold uppercase leading-tight text-black sm:text-3xl">
            Want to Meet The Team?
          </h3>
          <p className="mt-4 text-sm leading-7 text-black/80">
            Let&apos;s walk through your goals and show you the exact specialists who will guide the project.
          </p>
          <Link
            href="/book_a_demo"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Book a Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-[#F5F6F4] px-4 pb-16">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-black/10 bg-white px-6 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
              Next Step
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
              Let&apos;s Build Your Growth Engine
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-black/80">
              Share your goals and we&apos;ll craft a tailored roadmap with priorities, timing, and KPI targets.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Talk to Us
            </Link>
            <Link
              href="/book_a_demo"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#003b2f] px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>



    <div className="bg-[#F5F6F4] px-4 pb-16 ">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-black/10 bg-white px-6 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
              Mission And Vision
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
              Built To Grow Brands With Precision
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-black/10 bg-[#f6f6f6] px-6 py-6">
              <h3 className="text-lg font-semibold text-black">Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-black/80">
                Help ambitious teams unlock scalable growth through data, creativity, and clear execution.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-[#f6f6f6] px-6 py-6">
              <h3 className="text-lg font-semibold text-black">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-black/80">
                Build a partner-first agency known for measurable impact and long-term trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#F5F6F4] px-4 pb-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
              A Timeline Of Growth
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/80">
            From early experiments to multi-channel growth systems, each milestone shaped how we deliver results.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              year: "2018",
              title: "The First Wins",
              text: "Launched our first performance campaigns and refined the testing framework.",
            },
            {
              year: "2021",
              title: "Scaling Playbooks",
              text: "Expanded into full-funnel strategy with reporting and CRO integration.",
            },
            {
              year: "2024",
              title: "Growth Systems",
              text: "Built repeatable systems across paid, organic, and retention channels.",
            },
          ].map((item) => (
            <div key={item.year} className="rounded-[24px] border border-black/10 bg-white px-6 py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                {item.year}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-[#F5F6F4] px-4  ">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-black/10 bg-[#c8f07a] px-6 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
              Meet Our Founders
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-4xl">
              Built By Operators, Not Observers
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/80">
              Our founders have led growth for ambitious brands and built systems that scale with clarity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: "Arjun Malik", role: "Co-Founder, Growth Strategy" },
              { name: "Riya Kapoor", role: "Co-Founder, Creative & Brand" },
            ].map((member) => (
              <div key={member.name} className="rounded-[20px] border border-black/15 bg-white px-5 py-6">
                <p className="text-base font-semibold text-black">{member.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-black/60">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </section>
    </div>
  );
}