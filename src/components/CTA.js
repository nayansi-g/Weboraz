import Image from "next/image";
import Interactive from "@/components/animations/Interactive";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7+", label: "Years Building Web Apps" },
];

export default function CTA() {
  return (
    <section className="w-full py-10 sm:py-6 px-4 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[24px] bg-[#004b2d] lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[280px] sm:min-h-[380px] md:min-h-[500px] lg:min-h-full" variant="slideRight">
          <Image
            src="/team-meeting.jpg"
            alt="Weboraz team planning a website project"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <StaggerGroup className="flex flex-col justify-between bg-[#004b2d] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="max-w-xl">
            <div>
            <h2 className="max-w-[560px] text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl xl:text-[64px]">
              Build Your Next
              <br />
              Website With Weboraz
            </h2>
            </div>

            <div >
              <p className="mt-5 max-w-[640px] text-sm leading-6 text-white/95 sm:text-base sm:leading-7">
                We design and develop clean, responsive websites, landing pages, and
                custom web apps that help businesses grow with clarity and confidence.
              </p>
            </div>
          </div>

          {/* Stats Box */}
          <div >
            <div className="mt-8 rounded-[20px] bg-white/12 px-5 py-6 backdrop-blur-[2px] sm:mt-10 sm:px-7 sm:py-8 md:px-8 md:py-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
                {stats.map((item, index) => (
                  <Interactive key={index} hover="grow">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <h3 className="text-3xl font-bold leading-none text-white sm:text-4xl md:text-[48px]">
                        {item.value}
                      </h3>
                      <p className="text-sm font-medium leading-5 text-white/90 sm:text-base">
                        {item.label}
                      </p>
                    </div>
                  </Interactive>
                ))}
              </div>
            </div>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
