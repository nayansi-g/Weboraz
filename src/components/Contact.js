"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Interactive from "@/components/animations/Interactive";
import Reveal from "@/components/animations/Reveal";
import StaggerGroup from "@/components/animations/StaggerGroup";
import { EASE_OUT, tapPress } from "@/lib/animations/variants";

const faqData = [
  {
    id: 1,
    question: "What does Weboraz build?",
    answer:
      "We create business websites, landing pages, ecommerce sites, and custom web applications tailored to your goals.",
  },
  {
    id: 2,
    question: "How long does a website take?",
    answer:
      "Timelines depend on scope and content readiness. Most business websites take 2 to 4 weeks, while web apps take longer.",
  },
  {
    id: 3,
    question: "Do you work with startups and local businesses?",
    answer:
      "Yes. We work with startups, clinics, institutions, and growing companies that need a strong online presence.",
  },
  {
    id: 4,
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can refresh your design, improve performance, and rebuild the site for better results.",
  },
];

export default function ContactFaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-6  sm:py-8  lg:py-10">
      <Reveal className="mx-auto max-w-7xl" variant="fadeUp">
        <div className="rounded-[32px] bg-[#c7f084] p-4 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:rounded-[42px] lg:px-8 lg:py-12 xl:px-10 xl:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Left Form */}
          <StaggerGroup className="rounded-[24px] bg-[#f4f4f4] p-5 sm:p-6 md:p-8 lg:rounded-[28px]">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl md:text-[48px]">
                Start Your Project
              </h2>
            </Reveal>

            <form className="mt-8 space-y-5 sm:mt-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <Reveal>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 w-full rounded-full border border-black/15 bg-transparent px-6 text-sm text-black outline-none transition-colors placeholder:text-black/45 focus:border-black/30"
                  />
                </Reveal>
                <Reveal delay={0.04}>
                  <input
                    type="email"
                    placeholder="Company Name"
                    className="h-14 w-full rounded-full border border-black/15 bg-transparent px-6 text-sm text-black outline-none transition-colors placeholder:text-black/45 focus:border-black/30"
                  />
                </Reveal>
              </div>

              <Reveal delay={0.06}>
                <input
                  type="text"
                  placeholder="Project Type (Website, Web App, Ecommerce)"
                  className="h-14 w-full rounded-full border border-black/15 bg-transparent px-6 text-sm text-black outline-none transition-colors placeholder:text-black/45 focus:border-black/30"
                />
              </Reveal>

              <Reveal delay={0.08}>
                <textarea
                  rows={6}
                  placeholder="Tell us about your goals and timeline"
                  className="min-h-[150px] w-full resize-none rounded-[22px] border border-black/15 bg-transparent px-6 py-5 text-sm text-black outline-none transition-colors placeholder:text-black/45 focus:border-black/30 sm:min-h-[170px]"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <Interactive hover="grow">
                  <button
                    type="submit"
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#004b2d] px-9 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Send Request
                    <ArrowRight size={18} />
                  </button>
                </Interactive>
              </Reveal>
            </form>
          </StaggerGroup>

          {/* Right FAQ */}
          <StaggerGroup className="px-1 pt-2 sm:px-2 lg:px-0 lg:pt-1">
            <Reveal variant="slideLeft">
            <h2 className="text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-[72px]">
              Frequently Asked
            </h2>
            </Reveal>

            <div className="mt-8 space-y-4 sm:mt-10">
              {faqData.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <Reveal
                    key={item.id}
                    delay={index * 0.04}
                  >
                    <div
                      className={`rounded-[22px] border border-[#9fd66d] bg-[#c7f084] px-4 py-4 transition sm:px-6 ${
                        isOpen ? "shadow-none" : ""
                      }`}
                    >
                      <m.button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="flex w-full items-start justify-between gap-4 text-left"
                        whileTap={tapPress}
                      >
                        <div className="flex gap-3 sm:gap-4">
                          <span className="pt-1 text-xl font-medium text-black sm:text-2xl">
                            {String(index + 1).padStart(2, "0")}.
                          </span>

                          <div>
                            <h3 className="text-lg font-medium leading-snug text-black sm:text-[22px]">
                              {item.question}
                            </h3>

                            <AnimatePresence initial={false}>
                              {isOpen ? (
                                <m.p
                                  className="mt-3 max-w-[560px] overflow-hidden text-sm leading-7 text-black/80 sm:text-base"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.28, ease: EASE_OUT }}
                                >
                                  {item.answer}
                                </m.p>
                              ) : null}
                            </AnimatePresence>
                          </div>
                        </div>

                        <m.span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b5e474] text-black"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.22, ease: EASE_OUT }}
                        >
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </m.span>
                      </m.button>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </StaggerGroup>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
