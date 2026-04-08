
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

import ServicesSection from "@/components/ServicesSection";
import CTA from "@/components/CTA";
import TeamMemberSection from "@/components/TeamMember";
import TestimonialSection from "@/components/Testimonials";
import ContactFaqSection from "@/components/Contact";
import RecentBlogSection from "@/components/BlogSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F4] text-slate-950">   
     <Hero />    
      <AboutSection />
      <ServicesSection />
      <CTA />
      <TeamMemberSection />
      <TestimonialSection />
      <ContactFaqSection />
      <WhyChooseUs />
     
      <RecentBlogSection />
    </main>
  );
}
