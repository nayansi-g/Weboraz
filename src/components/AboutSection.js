import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";

function DoubleChevron() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-none text-slate-900"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L4 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6L14 10L10 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



const bulletItems = [
  "Transforming Visions into Digital Reality",
  "Unleash Your Digital Potential Connecting Brands",
  "Your Business, Our Digital Expertise Pioneering",
];

export default function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-10 lg:px-16 py-18  sm:py-24 ">
      <div className="mx-auto max-w-7xl">
        <StaggerGroup className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-950 sm:text-xs">
                About Us
              </span>
              <span className="h-px w-12 bg-emerald-900" />
            </div>

            <Reveal className="max-w-3xl" delay={0.04}>
              <h2 className="text-balance text-4xl font-bold uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.1rem]">
                Digital Excellence Of Our Digital
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <Reveal className="group overflow-hidden rounded-[80px]" variant="slideRight">
              <Image
                src="/about-img.jpg"
                width={500}
                height={400}
                alt="Creative team collaborating in the office"
                className="h-auto w-full rounded-[80px] transition duration-500 group-hover:scale-[1.03]"
              />
            </Reveal>

            <div className="flex flex-col justify-center">
              <Reveal delay={0.08} variant="slideLeft">
                <p className="max-w-xl text-md leading-7 text-slate-600 sm:text-lg">
                  A digital agency specializes in creating online strategies for
                  businesses to optimize their presence on the internet. A digital
                  agency specializes in creating online strategies for businesses to
                  optimize.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {bulletItems.map((item, index) => (
                  <Reveal key={item} delay={0.12 + index * 0.05}>
                    <div className="flex gap-3">
                      <DoubleChevron />
                      <p className="text-xl font-semibold leading-7 text-slate-800">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
