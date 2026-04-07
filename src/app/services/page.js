import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  MessageCircle,
  MonitorSmartphone,
  Smartphone,
  Workflow,
} from "lucide-react";
import BannerHero from "@/components/BannerHero";

const services = [
  {
    title: "Web Wise Solutions",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: MonitorSmartphone,
    href: "/services/web-wise-solutions",
  },
  {
    title: "Social Brilliance Studio",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: Headphones,
    href: "/services/social-brilliance-studio",
  },
  {
    title: "Digital Evolution Lab",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: BadgeCheck,
    href: "/services/digital-evolution-lab",
  },
  {
    title: "Web Wise Solutions",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: MessageCircle,
    href: "/services/web-wise-solutions-2",
  },
  {
    title: "Social Brilliance Studio",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: Smartphone,
    href: "/services/social-brilliance-studio-2",
  },
  {
    title: "Marketing Solutions",
    description:
      "A digital agency specializes in creating online strategies for businesses",
    icon: Workflow,
    href: "/services/marketing-solutions",
  },
];

export default function ServicesGridSection() {
  return (
    <div>
         <BannerHero heading="Our Services" pagename="Services" />
    <section className="bg-[#F5F6F4] px-4 py-10  sm:py-12 md:px-10 lg:px-16 xl:py-16">
       
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-48">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={`${service.title}-${index}`}
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
    </section></div>
  );
}