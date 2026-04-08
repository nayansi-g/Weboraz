export const clinic = {
  name: "Weboraz",
  shortName: "Weboraz",
  url: "https://www.weboraz.com",
  email: "hello@weboraz.com",
  supportEmail: "projects@weboraz.com",
  phone: "+91-90000-00000",
  telephoneHref: "tel:+919000000000",
  priceRange: "$$",
  description:
    "Weboraz builds modern business websites, landing pages, ecommerce sites, and custom web applications designed for speed, trust, and growth.",
  tagline: "Modern websites and web apps built for business growth.",
  availability: "Monday to Saturday",
  responseTime: "Replies within 24 hours",
  deliveryModel: "Remote-first delivery for startups and growing businesses",
  address: {
    streetAddress: "Remote-first digital studio",
    addressLocality: "India",
    addressRegion: "Available worldwide",
    postalCode: "000000",
    addressCountry: "IN",
  },
  geo: {
    latitude: "20.5937",
    longitude: "78.9629",
  },
  openingHours: ["Mo-Sa 10:00-18:00"],
  socialLinks: [
    "https://www.weboraz.com",
    "https://www.weboraz.com",
    "https://www.weboraz.com",
    "https://www.weboraz.com",
  ],
};

export const primaryNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export const serviceLinks = [
  { name: "Business Websites", href: "/services#business-websites" },
  { name: "Custom Web Apps", href: "/services#web-applications" },
  { name: "Ecommerce Websites", href: "/services#ecommerce-websites" },
  { name: "Landing Pages", href: "/services#landing-pages" },
  { name: "Website Redesign", href: "/services#website-redesign" },
];

export const homepageKeywords = [
  "web design agency",
  "web development company",
  "custom web app development",
  "business website development",
  "e-commerce website development",
  "responsive website design",
];

export function absoluteUrl(path = "/") {
  return new URL(path, clinic.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/banner-img.png",
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title ? `${title} | ${clinic.name}` : `${clinic.name} | ${clinic.tagline}`;

  return {
    metadataBase: new URL(clinic.url),
    title: title || clinic.tagline,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: clinic.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || clinic.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${clinic.url}/#organization`,
    name: clinic.name,
    url: clinic.url,
    description: clinic.description,
    telephone: clinic.phone,
    email: clinic.email,
    image: absoluteUrl("/banner-img.png"),
    logo: absoluteUrl("/weboraz-logo.png"),
    areaServed: "Worldwide",
    knowsAbout: [
      "Business website development",
      "Custom web application development",
      "E-commerce development",
      "Landing page design",
      "Dashboard development",
      "Responsive frontend development",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${clinic.url}/#website`,
    url: clinic.url,
    name: clinic.name,
    description: clinic.description,
    publisher: {
      "@id": `${clinic.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        "@id": `${clinic.url}/#organization`,
      },
    })),
  };
}
