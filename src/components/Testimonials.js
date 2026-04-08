"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, User } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import {
  EASE_OUT,
  tapPress,
} from "@/lib/animations/variants";

const testimonials = [
  {
    id: 1,
    name: "Ananya Rao",
    role: "Founder, Clinic",
    rating: 4,
    text: "Weboraz delivered a clean, professional website that patients trust. The process was clear and the results were immediate.",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    role: "Operations Manager",
    rating: 5,
    text: "They built a fast landing page that improved our lead quality and gave us a clear system for updates.",
  },
  {
    id: 3,
    name: "Sara Iqbal",
    role: "Startup CEO",
    rating: 4,
    text: "Weboraz translated our product vision into a modern web app that feels premium and works flawlessly.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="w-full bg-[#f3f3f3]  py-6  sm:py-8 px-4 md:px-10 lg:px-16 lg:py-10">
      <Reveal className="mx-auto max-w-7xl" variant="fadeUp">
        <div className="rounded-[32px] bg-[#004b2d] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:rounded-[44px] lg:px-12 lg:py-14 xl:px-16 xl:py-16">
        <div className="grid gap-8 lg:grid-cols-[160px_minmax(0,1fr)] xl:grid-cols-[190px_minmax(0,1fr)]">
          {/* Left Quote */}
          <div className="hidden lg:flex lg:items-start lg:justify-start">
            <span className="select-none text-[260px] font-extrabold leading-none text-transparent [-webkit-text-stroke:5px_rgba(255,255,255,0.18)] xl:text-[320px]">
              “
            </span>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            {/* Top Row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeTestimonial.id}
                  className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 text-center flex justify-center items-center sm:h-16 sm:w-16">
                     <User className="w-10 h-10 text-white"/>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
                        {activeTestimonial.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-white/90 sm:text-base">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 self-start pt-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          index < activeTestimonial.rating
                            ? "fill-[#f5b94c] text-[#f5b94c]"
                            : "fill-white/60 text-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </m.div>
              </AnimatePresence>
            </div>

            {/* Mobile Quote */}
            <div className="mt-6 block lg:hidden">
              <span className="select-none text-7xl font-extrabold leading-none text-transparent [-webkit-text-stroke:3px_rgba(255,255,255,0.18)] sm:text-8xl">
                “
              </span>
            </div>

            {/* Testimonial Text */}
            <div className="mt-4 sm:mt-6">
              <AnimatePresence mode="wait">
                <m.p
                  key={activeTestimonial.id}
                  className="max-w-5xl text-2xl font-light italic leading-[0.95] text-white sm:text-3xl md:text-[34px] md:leading-[1.5] lg:text-[44px] lg:leading-[1.45]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  {activeTestimonial.text}
                </m.p>
              </AnimatePresence>
            </div>

            {/* Slider Indicators */}
            <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12 lg:mt-14">
              {testimonials.map((_, index) => (
                <m.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileTap={tapPress}
                  className={`h-[8px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-24 sm:w-40 bg-[#e7d64c]"
                      : "w-10 sm:w-14 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
