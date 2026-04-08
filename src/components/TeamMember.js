"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Interactive from "@/components/animations/Interactive";
import Reveal from "@/components/animations/Reveal";
import { EASE_OUT, tapPress } from "@/lib/animations/variants";

const teamMembers = [
  {
    id: 1,
    name: "Nayansi Gupta",
    role: "Founder & Web Strategy",
    image: "/Nayansi_Gupta.png",
  },
  {
    id: 2,
    name: "Pritika Jaiswal",
    role: "Co-Founder & Design Lead",
    image: "/Pritika.jpeg",
  },
  {
    id: 3,
    name: "Satyam Gupta  ",
    role: "Head of Development",
    image: "/Satyam_Gupta.png",
  },
  
];

export default function TeamMemberSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateVisibleCount = () => setVisibleCount(getVisibleCount());
      updateVisibleCount();
      window.addEventListener("resize", updateVisibleCount);
      return () => window.removeEventListener("resize", updateVisibleCount);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const visibleMembers = Array.from({ length: visibleCount }, (_, i) => {
    return teamMembers[(currentIndex + i) % teamMembers.length];
  });

  return (
    <section className="w-full bg-[#f4f4f4] px-4 md:px-10 lg:px-16 py-6  sm:py-10  lg:py-16">
      <Reveal className="mx-auto max-w-7xl" variant="fadeUp">
        <div className="rounded-[36px] bg-[#efe061] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:rounded-[48px] lg:px-10 lg:py-24 xl:px-12">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-between  ">
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#003f2d] sm:text-xs">
              Weboraz Team
            </span>
            <div className="relative h-[2px] w-12 bg-[#003f2d]">
              <span className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#003f2d]" />
            </div>
          </div>

          <div className="">
            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-[72px]">
              The People
              <br />
              Building Weboraz
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {teamMembers.map((member) => (
              <m.div
                key={`${currentIndex}-${member.id}`}
                className="group relative"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.38, ease: EASE_OUT }}
                layout
              >
                <Interactive>
                  <div className="relative overflow-hidden rounded-[30px] bg-black/5">
                    <div className="relative h-[480px] w-full sm:h-[480px] lg:h-[480px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <m.button
                      aria-label={`Share ${member.name}`}
                      className="absolute right-4 cursor-pointer top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#b8ea6a] text-[#003f2d] transition"
                      whileTap={tapPress}
                      whileHover={{ scale: 1.06 }}
                    >
                      <Share2 size={17} />
                    </m.button>

                    <div className="absolute right-0 top-6 h-[62%] w-14 rounded-l-[18px] bg-white/20 backdrop-blur-[2px]" />
                  </div>
                </Interactive>

                <div className="relative mx-auto -mt-16 w-[84%] rounded-[22px] border-2 border-[#003f2d] bg-[#ecece7] px-4 py-5 text-center shadow-sm">
                  <h3 className="text-[22px] font-medium leading-tight text-[#1f1f1f] sm:text-[24px]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-black/65 sm:text-base">
                    {member.role}
                  </p>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
