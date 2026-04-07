import BannerHero from "@/components/BannerHero";
import { ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: BadgeCheck,
    title: "Unlock the digital potential for your business",
  },
  {
    icon: Smartphone,
    title: "Experience the best in digital marketing",
  },
  {
    icon: BarChart3,
    title: "Drive success online with our tailored services",
  },
];

      const chooseItems = [
  {
    id: "01",
    title: "Let’s go digital with our agency",
    active: false,
  },
  {
    id: "02",
    title: "Unleash the power of digital",
    active: true,
  },
  {
    id: "03",
    title: "Elevate your brand with agency",
    active: false,
  },
];

export default function About() {
  return (
    <div>
         <BannerHero heading="About Us" pagename="About" />
    <section className="bg-[#F5F6F4] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 xl:py-20">
        
      <div className="mx-auto max-w-7xl">
        {/* top label */}
        <div className="mb-8 flex items-center gap-4 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black sm:text-xs">
            About Us
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
              Boost Your
              <br />
              Presence Our
              <br />
              Expertise
            </h2>
          </div>

          <div className="max-w-[420px] lg:pt-3">
            <p className="text-base leading-8 text-black/85 sm:text-lg">
              A digital agency specializes in creating strategies for businesses
              to optimize their presence on the internet. They offer as website
              design
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#0d5a43] px-7 text-sm font-semibold text-[#0d5a43] transition duration-300 hover:bg-[#0d5a43] hover:text-white sm:h-16 sm:px-8 sm:text-base"
            >
              Read More
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



    <div className="bg-[#F5F6F4] py-12  sm:py-14  xl:py-16 mb-24">
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
                Why Chose Us
              </span>
              <span className="h-[1.5px] w-10 bg-[#0b4b38] sm:w-12" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#0b4b38]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-4xl font-bold uppercase leading-[1.02] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px]">
              Experience The
            
              Best Digital
             
              Marketing
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
    </section>
    </div>
  );
}