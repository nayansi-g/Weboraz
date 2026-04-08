import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/animations/AnimationProvider";
import ContactButtons from "@/components/ContactButtons";
import PageTransition from "@/components/animations/PageTransition";
import { buildMetadata, clinic, medicalBusinessSchema, websiteSchema } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = buildMetadata({
  title: "Weboraz | Modern Websites & Web Apps",
  description: clinic.description,
  keywords: [
    "business website design",
    "web app development",
    "landing page design",
    "ecommerce website development",
    "responsive web design",
    "custom web solutions",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([medicalBusinessSchema(), websiteSchema()]),
          }}
        />
        <AnimationProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ContactButtons />
        </AnimationProvider>
      </body>
    </html>
  );
}
