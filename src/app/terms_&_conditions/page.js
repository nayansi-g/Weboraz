export default function TermsPage() {
    const termsParagraphs = [
    "1. These Terms & Conditions govern your use of the Weboraz website and services.",
    "2. By accessing our website or engaging our services, you agree to these terms.",
    "3. You agree to provide accurate information required to deliver your website or web app.",
    "4. All content, design, and code created by Weboraz remains our intellectual property until full payment is received.",
    "5. Project timelines depend on scope, content readiness, and timely feedback from the client.",
    "6. You agree not to use our services for unlawful, harmful, or infringing activities.",
    "7. Weboraz may include third-party tools or services; their terms apply independently.",
    "8. Payments are due as outlined in your proposal or invoice. Late payments may delay delivery.",
    "9. We limit liability for indirect or consequential damages to the maximum extent permitted by law.",
    "10. These terms are governed by the laws of India, and disputes will be resolved in applicable courts.",
    "11. For any concerns, contact us at hello@weboraz.com.",
  ]

  return (
    <section className="bg-[#F5F6F4] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-30">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          {termsParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
