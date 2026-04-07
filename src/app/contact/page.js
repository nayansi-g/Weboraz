import BannerHero from "@/components/BannerHero";
import { Mail, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
   <div> 
    <BannerHero heading="Contact Us" pagename="Contact" />
    <section className="w-full bg-[#F5F6F4] px-4 pt-28 md:px-10 lg:px-16 ">
        
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Image Card */}
        <div className="relative min-h-[380px] overflow-hidden rounded-[24px] sm:min-h-[500px] lg:min-h-[560px]">
          <img
            src="/team-meeting.jpg"
            alt="Office workspace"
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
                    2715 .San Jose, South Dakota 83475
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
                    +0081751451771
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
                    sara.cruz@example.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="rounded-[24px] border border-[#d9d9d9] bg-transparent p-5 sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-semibold leading-tight text-[#1f2a37] sm:text-4xl md:text-5xl">
            Get In Touch
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
                  Chose An Option
                </option>
                <option>Web Design</option>
                <option>UI/UX Design</option>
                <option>Development</option>
                <option>Marketing</option>
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
              Sent Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <WorkProcessSection />
    </section></div>
  );
}



import { BarChart3, Rocket, Settings2 } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Digital Dreams Agency",
    description:
      "A digital agency specializes in creating strategies for businesses to optimize their best of the presence their",
    icon: Settings2,
  },
  {
    id: "02",
    title: "Brand Brilliance",
    description:
      "A digital agency specializes in creating strategies for businesses to optimize their best of the presence",
    icon: BarChart3,
  },
  {
    id: "03",
    title: "Conversion Geniuses",
    description:
      "A digital agency specializes in creating strategies for businesses to optimize their best of the presence",
    icon: Rocket,
  },
];

 function WorkProcessSection() {
  return (
    <section className="bg-[#f6f6f6] px-4 py-14  sm:py-16 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl pb-42">
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