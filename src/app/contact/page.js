import BannerHero from "@/components/BannerHero";
import { faqSchema } from "@/lib/site";
import { Mail, MapPin, Phone, ChevronDown, ArrowRight, PhoneOutgoing, MoveUpRight } from "lucide-react";

export default function ContactSection() {
    const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We typically reply within 24 hours on business days.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. We start with a complimentary discovery call to understand your goals.",
  },
  {
    q: "What should I prepare before contacting you?",
    a: "Share your business type, current website (if any), goals, and timeline.",
  },
  {
    q: "Do you work with startups and local businesses?",
    a: "Absolutely. We work with startups, clinics, institutions, and growing teams.",
  },
]

const services = [
  "Business Websites",
  "Landing Pages",
  "Web Applications",
  "Ecommerce Websites",
  "Website Redesign",
]

  return (
   <div className="bg-[#F5F6F4]"> 
    <BannerHero heading="Contact Us" pagename="Contact" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map((item) => ({ question: item.q, answer: item.a })))) }}
    />

     <section className="px-4  text-center sm:px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-16 ">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
             Let&apos;s Grow Your Business
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Ready for a modern website or web app? Let&apos;s build a digital experience that fits your business.
          </p>
          <a   href="https://wa.me/919000000000"
  target="_blank"
  rel="noopener noreferrer"><button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Book a Consultation
            <MoveUpRight className="h-4 w-4" />
          </button></a>
        </div>
      </section>
    <section className="w-full  px-4 pt-28 md:px-10 lg:px-16 ">
        
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Image Card */}
        <div className="relative min-h-[380px] overflow-hidden rounded-[24px] sm:min-h-[500px] lg:min-h-[560px]">
          <img
            src="/team-meeting.jpg"
            alt="Weboraz team workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Contact Info */}
          <div className="absolute bottom-6 left-5 right-5 z-10 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-white/85">Address</p>
                  <h3 className="text-lg font-semibold leading-snug sm:text-[1.75rem]">
                    Remote-first studio, India
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-white/85">Phone Number</p>
                  <h3 className="text-lg font-semibold leading-snug sm:text-[1.75rem]">
                    +91 90000 00000
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-white/85">Email</p>
                  <h3 className="break-all text-lg font-semibold leading-snug sm:text-[1.75rem]">
                    hello@weboraz.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-5 sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl md:text-5xl">
            Start Your Project
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 w-full rounded-full border border-[#d9d9d9] bg-transparent px-6 text-base text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="h-14 w-full rounded-full border border-[#d9d9d9] bg-transparent px-6 text-base text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
              />
            </div>

            <div className="relative">
              <select
                className="h-14 w-full appearance-none rounded-full border border-[#d9d9d9] bg-transparent px-6 pr-12 text-base text-[#1f2a37] outline-none focus:border-[#0b5d3b]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an Option
                </option>
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>Web Application</option>
                <option>Ecommerce Website</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]" />
            </div>

            <textarea
              placeholder="Message here.."
              rows={6}
              className="w-full rounded-[20px] border border-[#d9d9d9] bg-transparent px-6 py-5 text-base text-[#1f2a37] outline-none placeholder:text-[#6b7280] focus:border-[#0b5d3b]"
            />

            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#004d33] px-7 text-base font-semibold text-white transition hover:bg-[#003826]"
            >
              Send Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <WorkProcessSection />
    </section>
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <section className="">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">About Weboraz</h2>
          <p className="mt-4 text-gray-700">
            Weboraz creates modern websites and web applications for businesses that need a professional online presence.
          </p>
          <p className="mt-3 text-gray-700">Whether you&apos;re looking for:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item} className="rounded-full border border-[#d9d9d9] bg-transparent px-5 py-3 text-sm text-[#1f2a37]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">
            Our team is ready to design and build a solution tailored to your goals.
            Fill out the form and we will get back to you within 24 hours.
          </p>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-6">
              <h3 className="text-2xl font-semibold leading-tight text-[#1f2a37]">Prefer to Talk Directly?</h3>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>Email: hello@weboraz.com</p>
                <p>Phone: +91 90000 00000</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-6">
              <h3 className="text-2xl font-semibold leading-tight text-[#1f2a37]">Business Hours</h3>
              <p className="mt-3 text-gray-700">
                Monday - Saturday
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>

            <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-6">
              <h3 className="text-2xl font-semibold leading-tight text-[#1f2a37]">Working Location</h3>
              <p className="mt-3 text-gray-700">
                Remote-first digital studio
                <br />
                Serving clients worldwide
              </p>
            </div>
         
        </div>

        <section className="mt-8  p-5 md:p-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">Why Businesses Choose Weboraz</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Modern, clean web design",
              "Responsive development for all devices",
              "Fast performance and SEO-ready builds",
              "Clear communication and timelines",
              "Long-term support and iteration",
            ].map((item) => (
              <div key={item} className="rounded-full border border-[#d9d9d9] bg-transparent px-5 py-3 text-sm text-[#1f2a37]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">We don&apos;t just run campaigns, we build long-term growth engines.</p>
        </section>

        <section className="mt-8 p-5 md:p-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">What Happens After You Reach Out</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-5">
                <p className="text-sm font-semibold text-[#6b7280]">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-[#1f2a37]">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8  p-5 md:p-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl">Common Questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="overflow-hidden rounded-[24px] border border-[#d9d9d9] bg-transparent">
                <summary className="cursor-pointer px-5 py-4 pr-12 font-medium text-[#1f2a37]">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    <section className="bg-[#F5F6F4] px-4 pb-16 text-center sm:px-6 md:pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to Launch With Weboraz?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Let&apos;s build a website or web app that looks great and drives real business results.
        </p>
       <a  href="tel:+919000000000"> <button className="mt-7 inline-flex items-center cursor-pointer gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
          <PhoneOutgoing className="w-5 h-5" /> Call Now
          {/* <MoveUpRight className="h-4 w-4" /> */}
        </button></a>
      </section></div>
  );
}



import { BarChart3, Rocket, Settings2 } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    id: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and the kind of website or web app you need.",
    icon: Settings2,
  },
  {
    id: "02",
    title: "Design & Build",
    description:
      "We design the experience and build a responsive, high-performing solution.",
    icon: BarChart3,
  },
  {
    id: "03",
    title: "Launch & Support",
    description:
      "We launch, test, and stay available for updates and improvements.",
    icon: Rocket,
  },
];


 function WorkProcessSection() {
  return (
    <section className="bg-[#f6f6f6] px-4 py-14  sm:py-16 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl ">
        {/* Top Label */}
        <div className="mb-8 flex items-center gap-4 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
            Work Process
          </span>
          <span className="h-[2px] w-10 bg-[#0c5a43] sm:w-14" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0c5a43]" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[900px] text-4xl font-bold uppercase leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
          Drive Success Online
          <br />
          With Our Tailored
        </h2>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {/* Dashed curved line for desktop */}
          <svg
            className="pointer-events-none absolute left-0 top-0 hidden h-[120px] w-full lg:block"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M170 78 C270 10, 350 10, 450 78 S630 146, 740 78 S930 10, 1030 78"
              stroke="#0c5a43"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center lg:pt-20"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4dc57] shadow-sm">
                  <Icon className="h-7 w-7 text-[#1f1f1f]" strokeWidth={2} />
                </div>

                <div className="mt-6 max-w-[320px]">
                  <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-[2rem]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[280px] text-base leading-8 text-[#2d2d2d]/85 sm:max-w-[300px]">
                    {step.description}
                  </p>
                </div>

                <span className="pointer-events-none absolute bottom-[-10px] text-[90px] font-semibold leading-none text-[#00000008] sm:text-[110px]">
                  {step.id}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
