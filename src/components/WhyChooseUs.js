export default function WhyChooseUs() {
  const points = [
    {
      title: "Business-First Design",
      text: "Every screen is built to build trust, guide users, and drive action.",
      bg: "bg-white",
      textColor: "text-gray-800",
      descColor: "text-gray-600",
      position: "left-0 top-10",
    },
    {
      title: "Modern, Fast, Responsive",
      text: "Clean UI and performance-first development across devices and screens.",
      bg: "bg-[#004B2D] ",
      textColor: "text-white",
      descColor: "text-emerald-100",
      position: "right-0 top-16",
    },
    {
      title: "Custom Web Solutions",
      text: "From websites to dashboards, we tailor the build to your workflow.",
      bg: "bg-[#004B2D]",
      textColor: "text-white",
      descColor: "text-emerald-100",
      position: "left-10 bottom-10",
    },
    {
      title: "Clear Process, Clear Timelines",
      text: "You get milestones, updates, and a smooth handoff when we launch.",
      bg: "bg-white",
      textColor: "text-gray-800",
      descColor: "text-gray-600",
      position: "right-10 bottom-10",
    },
    
  ]

  return (
    <section className="relative overflow-hidden  py-10 ">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl tracking-tight">
            WHY WEBORAZ?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We build websites and web apps that look professional and perform for real businesses.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative mt-10 flex justify-center">

          <div
            className="relative w-full h-[600px] max-w-3xl rounded-2xl border border-gray-200 bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: "url('/team-meeting.jpg')",
            }}
          >
            {/* Overlay for slight darkening */}
            {/* <div className="absolute inset-0 rounded-2xl bg-black/20"></div> */}

            {/* Spacer to maintain height */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/4]"></div>
          </div>

          {/* Floating Boxes (Desktop Only) */}
          <div className="hidden lg:block">
            {points.map((point, index) => (
              <div
                key={index}
                className={`absolute w-72 border border-gray-200 rounded-2xl p-6 shadow-xl ${point.bg} ${point.position}`}
              >
                <h3 className={`text-lg font-semibold ${point.textColor}`}>
                  {point.title}
                </h3>
                <p className={`mt-2 text-sm ${point.descColor}`}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="mt-16 grid md:grid-cols-2 gap-5 lg:hidden">
          {points.map((point, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-gray-200 p-6 shadow-lg ${point.bg}`}
            >
              <h3 className={`text-lg font-semibold ${point.textColor}`}>
                {point.title}
              </h3>
              <p className={`mt-2 text-sm ${point.descColor}`}>
                {point.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
