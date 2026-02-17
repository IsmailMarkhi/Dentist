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
    <section id="services" className="py-24 bg-gray-50">
      
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900">
          Our Dental Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a full range of treatments using modern technology
          to ensure comfort, safety, and long-lasting results.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              <div className="text-4xl mb-4">{s.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900">
                {s.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
