import { Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaYoutube } from "react-icons/fa"
import Reveal from "@/components/animations/Reveal"
import StaggerGroup from "@/components/animations/StaggerGroup"
import Interactive from "@/components/animations/Interactive"

const quickLinks = {
  company: [
    { label: "About Weboraz", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Insights", href: "/blog" },
    { label: "Book a Demo", href: "/book_a_demo" },
    { label: "FAQs", href: "/contact" },
    { label: "Start a Project", href: "/contact" },
  ],
  services: [
    { label: "Business Websites", href: "/services#business-websites" },
    { label: "Landing Pages", href: "/services#landing-pages" },
    { label: "Web Applications", href: "/services#web-applications" },
    { label: "Ecommerce Websites", href: "/services#ecommerce-websites" },
    { label: "Website Redesign", href: "/services#website-redesign" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy_policy" },
    { label: "Terms & Conditions", href: "/terms_&_conditions" },
    { label: "Refund Policy", href: "/refund_policy" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden bg-[#F5F6F4]  md:pt-44  pt-40 text-white ">


      <div className="relative z-10 mx-auto bg-[#0b3d2e] pb-6 px-4 sm:px-6 md:px-8 pt-38  sm:pt-48 md:pt-44 md:pb-8  w-full">
        <Reveal>
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl md:mb-10 md:text-4xl">
            Let&apos;s Build Something Great
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-8 border-t border-white/10 pt-4 sm:pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
             <div className="space-y-2">
             <Link href="/" className="flex items-center">
                         <div className="flex items-center justify-start">
              <Image
                src="/logo_transparent.png"
                width={70}
                height={70}
                alt="Weboraz logo"
                className="h-auto w-14 sm:w-[70px]"
              />
              <h2 className="text-2xl font-bold sm:text-3xl">Weboraz</h2>
            </div>
                        </Link>
                     
            <p className="max-w-sm text-sm text-gray-400">
              Weboraz builds modern websites and web applications for businesses that want a clean, trustworthy, and growth-focused online presence.
            </p>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-200">Contact</h4>
              <p className="text-sm text-gray-400">hello@weboraz.com</p>
              <p className="text-sm text-gray-400">+91 90000 00000</p>
              <p className="text-sm text-gray-400">Remote-first digital studio</p>
              <p className="text-sm text-gray-400">Serving clients worldwide</p>
            </div>
          </div>
            <FooterColumn title="Services" className="mt-10" links={quickLinks.services} />
         
          <FooterColumn title="Resources" links={quickLinks.resources} />
         <FooterColumn title="Company" links={quickLinks.company} />
          <FooterColumn title="Legal" links={quickLinks.legal} />
        </StaggerGroup>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:mt-12 md:flex-row md:items-center">
          
          <div className="flex gap-2 sm:gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes].map((Icon, i) => (
              <Interactive key={i} hover="grow">
              <button
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 sm:h-9 sm:w-9"
                aria-label="social link"
              >
                <Icon className="text-sm" />
              </button>
              </Interactive>
            ))}
          </div>
          <p className="text-sm text-gray-500">Weboraz (c) 2026. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute  left-1/2 top-30 z-20  w-full max-w-6xl -translate-x-1/2 -translate-y-[35%] px-4 sm:px-8 lg:px-16">
        <Reveal className="rounded-2xl bg-white px-5 py-6 border-1 border-gray-200 shadow-xl sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <h2 className="max-w-2xl text-2xl font-medium leading-snug text-gray-800 sm:text-3xl lg:text-4xl xl:text-[45px]">
              Get Weboraz Insights and Web Launch Tips
            </h2>

            <div className="w-full max-w-xl space-y-3">
              <div className="flex items-center rounded-full border-2 border-gray-200 bg-white px-4 py-3 sm:px-5 sm:py-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent text-sm text-gray-600 outline-none sm:text-base"
                />
                <Send size={18} className="shrink-0 text-gray-500" />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFEB69] px-6 py-3 font-medium text-black transition hover:bg-yellow-500 sm:py-4">
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <Reveal>
    <div>
      <h4 className="mb-4 font-semibold">{title}</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </Reveal>
  )
}
