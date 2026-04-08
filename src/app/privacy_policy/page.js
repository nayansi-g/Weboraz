

export default function PrivacyPolicyPage() {
    const sections = [
    {
      title: "1. Information We Collect",
      points: [
        "Contact Details: Name, email address, phone number, and company name.",
        "Project Information: Website or app goals, content, and functional requirements.",
        "Payment Details: Billing information handled securely by third-party processors.",
        "Technical Data: IP address, device type, and usage data through cookies.",
      ],
      intro:
        "We collect information you provide directly and technical data collected during your visit.",
    },
    {
      title: "2. How We Use Your Information",
      points: [
        "Service Delivery: Planning, designing, and building your website or web app.",
        "Communication: Project updates, support, and proposal follow-ups.",
        "Improvement: Enhancing our processes and website experience.",
        "Legal Compliance: Preventing fraud and meeting regulatory obligations.",
      ],
      intro:
        "We use the collected data to deliver our services and communicate clearly.",
    },
    {
      title: "3. Data Sharing and Disclosure",
      points: [
        "Service Providers: Hosting, analytics, or tools required to deliver services.",
        "Payment Processors: To handle billing and invoices securely.",
        "Legal Authorities: If required by law or to protect our rights.",
      ],
      intro:
        "We do not sell your personal data. We only share data when necessary to deliver services.",
    },
    {
      title: "4. Cookies and Tracking Technologies",
      points: [
        "Essential Cookies: Required for site functionality and security.",
        "Analytics Cookies: Help us understand usage and improve our website.",
      ],
      intro:
        "We use cookies to improve your browsing experience and site performance.",
      footer:
        "You can manage your cookie preferences through your browser settings.",
    },
    {
      title: "5. Data Security",
      body: "We use industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "6. Your Rights",
      points: [
        "Access: Request a copy of the personal data we hold about you.",
        "Correction: Ask us to update inaccurate information.",
        "Deletion: Request deletion of personal data where applicable.",
        "Opt-out: Unsubscribe from marketing emails at any time.",
      ],
      intro: "Depending on your location, you may have the following rights:",
    },
    {
      title: "7. Third-Party Links",
      body: "Our website may link to external websites. We are not responsible for their privacy practices.",
    },
    {
      title: "8. Changes to This Policy",
      body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date.",
    },
    {
      title: "9. Contact Us",
      body: "If you have questions about this Privacy Policy, please contact us:",
      contact: [
        "Email: hello@weboraz.com",
        "Phone: +91 90000 00000",
        "Address: Remote-first digital studio",
        "Serving clients worldwide",
      ],
    },
  ]

  return (
    <main className="w-full bg-[#F5F6F4] text-gray-800 px-6 py-30 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mx-auto max-w-4xl leading-relaxed">
            Welcome to Weboraz. We value your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, and protect your information when you visit our
            website or use our web design and development services.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
              {section.intro && <p className="mb-4 text-gray-700">{section.intro}</p>}
              {section.body && <p className="text-gray-700">{section.body}</p>}
              {section.points && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="mt-4 text-gray-700">{section.footer}</p>}
              {section.contact && (
                <div className="mt-4 space-y-1 text-gray-700">
                  {section.contact.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
