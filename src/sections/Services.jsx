export default function Services() {
  const services = [
    {
      title: "Dental Implants",
      desc: "Permanent solution for missing teeth with natural look and function.",
      icon: "🦷",
    },
    {
      title: "Teeth Whitening",
      desc: "Professional whitening treatments for a brighter smile.",
      icon: "✨",
    },
    {
      title: "Orthodontics",
      desc: "Braces and aligners to straighten teeth and improve bite.",
      icon: "😁",
    },
    {
      title: "Routine Cleaning",
      desc: "Preventive care to maintain healthy teeth and gums.",
      icon: "🪥",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance the appearance of your smile with modern techniques.",
      icon: "💎",
    },
    {
      title: "Emergency Care",
      desc: "Immediate treatment for dental pain or injuries.",
      icon: "🚑",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-br from-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Comprehensive Dental Services
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From preventive care to advanced treatments, we provide
            personalized solutions designed for long-term oral health.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid lg:grid-cols-3 gap-10">

          {/* FEATURED SERVICE */}
          <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-5xl mb-6">🦷</div>

            <h3 className="text-3xl font-bold text-gray-900">
              Dental Implants
            </h3>

            <p className="mt-4 text-gray-600 text-lg">
              Restore missing teeth permanently with advanced implant
              technology that looks, feels, and functions like natural teeth.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* SIDE SERVICES */}
          <div className="space-y-6">

            {services.slice(1).map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex gap-4 items-start"
              >
                <div className="text-3xl">{s.icon}</div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {s.title}
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
