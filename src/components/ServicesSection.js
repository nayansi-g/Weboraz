import { ArrowRight, MonitorSmartphone, Globe, Mic } from "lucide-react";
import Interactive from "@/components/animations/Interactive";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";

const services = [
  {
    id: 1,
    title: "Business Websites",
    description:
      "Professional, fast, and mobile-ready websites built to represent your brand.",
    icon: MonitorSmartphone,
  },
  {
    id: 2,
    title: "Landing Pages",
    description:
      "Conversion-focused pages for ads, launches, and lead generation.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Custom Web Apps",
    description:
      "Scalable web applications that automate workflows and operations.",
    icon: Mic,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-10 sm:py-14 px-4  md:px-10 lg:px-16 ">
      <Reveal className="mb-20 text-center" variant="fadeUp">
        <h1 className="text-4xl font-bold uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.8rem]">
          Services Built For Growth
        </h1>
      </Reveal>
      <StaggerGroup className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.id}>
              <Interactive className="h-full">
                <article className="group h-full bg-white rounded-[28px] bg-[#f7f7f7] px-4 py-4 text-center transition-all duration-300 hover:bg-[#004b2d] lg:px-6 lg:py-6">
                  <div className="mx-auto flex h-22 w-22 items-center justify-center rounded-full bg-[#e4e4e4] transition-all duration-300 group-hover:bg-white/10 ">
                    <Icon className="h-10 w-10 text-[#3f3f3f] transition-colors duration-300 group-hover:text-white sm:h-11 sm:w-11" />
                  </div>

                  <h3 className="mx-auto mt-8 max-w-[300px] text-3xl font-medium leading-tight text-black transition-colors duration-300 group-hover:text-white sm:text-4xl lg:text-[30px]">
                    {service.title}
                  </h3>

                  <p className="mx-auto mt-6 max-w-[330px] text-base leading-8 text-[#3b3b3b] transition-colors duration-300 group-hover:text-white/90 sm:text-lg">
                    {service.description}
                  </p>

                  <div className="mx-auto mt-10 inline-flex items-center gap-3 text-xl font-medium text-[#2f2f2f] transition-colors duration-300 group-hover:text-white sm:mt-12">
                    <span>Explore Service</span>
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              </Interactive>
            </Reveal>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
