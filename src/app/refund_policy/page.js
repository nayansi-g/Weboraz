
export default function RefundPolicyPage() {
    const sections = [
    {
      title: "1. Scope of This Policy",
      body: "This Refund Policy applies to Weboraz services including website design, landing pages, web apps, ecommerce builds, redesigns, and support retainers.",
    },
    {
      title: "2. Nature of Services",
      body: "Weboraz provides professional services that require planning, design, development, and delivery time. Because these services are effort-based, refunds are limited and subject to the terms below.",
    },
    {
      title: "3. Non-Refundable Fees",
      points: [
        "Discovery and onboarding fees",
        "Design and planning fees",
        "Development work already completed",
        "Maintenance retainers after the period begins",
      ],
      footer: "Once work has started, payments for completed milestones are non-refundable.",
    },
    {
      title: "4. Third-Party Charges",
      body: "Domain purchases, hosting fees, paid plugins, and external software tools are billed by third parties and are non-refundable through Weboraz.",
    },
    {
      title: "5. Cancellation and Billing Cycle",
      body: "You may cancel future services by giving written notice before the next billing cycle. Cancellation stops upcoming billing only and does not reverse charges for work already delivered.",
    },
    {
      title: "6. Refunds in Exceptional Cases",
      intro: "A refund may be reviewed only in limited situations such as:",
      points: [
        "Duplicate payment",
        "Incorrect billing amount due to a technical error",
        "Service not delivered at all after confirmed payment",
      ],
      footer: "Approved refunds, if any, are processed to the original payment method within 7-14 business days.",
    },
    {
      title: "7. Performance Disclaimer",
      body: "Website and app performance depends on factors outside our control, including content, market conditions, and business operations. Weboraz does not provide refunds solely due to unmet outcomes.",
    },
    {
      title: "8. Chargebacks",
      body: "If you have a billing concern, contact us first for resolution. Unjustified chargebacks may lead to service suspension and may be contested with project records.",
    },
    {
      title: "9. How to Request a Refund Review",
      intro: `To request a refund review, email us with the subject line "Refund Request" and include:`,
      points: [
        "Full name and registered email",
        "Invoice or payment reference",
        "Service details",
        "Reason for request",
      ],
      footer: "We usually respond within 5-7 business days.",
    },
    {
      title: "10. Contact Details",
      contact: [
        "Email: hello@weboraz.com",
        "Phone: +91 90000 00000",
        "Address: Remote-first digital studio",
        "Serving clients worldwide",
      ],
    },
    {
      title: "11. Policy Updates",
      body: "Weboraz may revise this Refund Policy at any time. Updated versions will be posted on this page.",
    },
  ]

  return (
    <section className="bg-[#F5F6F4] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-30">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Refund Policy
          </h1>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Weboraz, we are committed to transparency and fair billing. This policy explains when refunds may apply for our services.in.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {section.intro && <p className="text-gray-700 mb-4">{section.intro}</p>}
              {section.body && <p className="text-gray-700">{section.body}</p>}
              {section.points && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="text-gray-700 mt-4">{section.footer}</p>}
              {section.contact && (
                <div className="space-y-1 text-gray-700">
                  {section.contact.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
