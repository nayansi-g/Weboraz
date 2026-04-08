import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";
import Interactive from "@/components/animations/Interactive";

function SparkIcon() {
  return (
    <svg
      className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-900"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M27 7L14 24H23L21 41L34 24H25L27 7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M35 10L37 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M11 30L13 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11.5 5.5L16 10L11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Avatar({ bgClass, label }) {
  return (
    <div
      className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white ${bgClass}`}
      aria-label={label}
    >
      <span className="text-xs font-semibold text-slate-800">
        {label.slice(0, 1)}
      </span>
    </div>
  );
}

function PersonShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-[260px] items-end justify-center sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[500px]">
      
      {/* background circle */}
      <div className="absolute bottom-0 h-[180px] w-[180px] rounded-t-full bg-white sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[330px] lg:w-[400px]" />
      
      {/* glow */}
      <div className="absolute bottom-2 left-1/2 h-[100px] w-[180px] -translate-x-1/2 rounded-[50%] bg-white/70 blur-2xl sm:h-[120px] sm:w-[220px] md:h-[140px] md:w-[250px]" />

      {/* image wrapper */}
      <div className="relative z-10 flex w-full items-end justify-center">
        <Image
          src="/men_image.png"
          alt="Weboraz hero"
          width={450}
          height={500}
          priority
          className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] object-contain object-bottom"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-26 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#CFFF92] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-900">
              Weboraz Studio
            </div>

            <h1 className="flex flex-col items-center font-bold uppercase tracking-tight text-slate-900">
              <span className="block text-[26px] leading-[1] sm:text-[40px] md:text-[50px] lg:text-[60px]">
                Websites & Web Apps
              </span>
              <span className="block text-[26px] leading-[1] sm:text-[40px] md:text-[50px] lg:text-[60px]">
                Built For Growth
              </span>
            </h1>
          </div>
        </Reveal>

        <StaggerGroup className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_minmax(320px,560px)_1fr] lg:gap-6">
          <Reveal className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <p className="max-w-sm text-sm leading-6 text-slate-700 sm:max-w-md sm:text-base">
              Weboraz designs and builds modern websites and web apps that help
              businesses look professional, load fast, and convert visitors.
            </p>

            <Interactive hover="grow">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900 px-5 py-3 text-sm font-medium text-emerald-950 hover:bg-emerald-950 hover:text-white"
              >
                About Weboraz <ArrowIcon />
              </a>
            </Interactive>
          </Reveal>

          <Reveal className="flex hidden md:block justify-center" delay={0.05}>
            <PersonShowcase />
          </Reveal>

          <Reveal className="flex flex-col pb-10 md:pb-0 items-center  gap-6 text-center lg:items-end lg:text-right" delay={0.1}>
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#ffe45c] shadow-lg">
              <SparkIcon />
              <div className="mt-2 text-3xl font-bold">100+</div>
              <p className="text-xs">Projects Delivered</p>
            </div>

            <div>
              <div className="flex -space-x-3 justify-center lg:justify-end">
                <Avatar bgClass="bg-rose-200" label="A" />
                <Avatar bgClass="bg-amber-200" label="B" />
                <Avatar bgClass="bg-sky-200" label="C" />
              </div>

              <p className="mt-4 max-w-[220px] text-sm font-semibold">
                Strategy, design, and development in one team
              </p>
            </div>
          </Reveal>
        </StaggerGroup>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-lime-300" />
    </section>
  );
}
