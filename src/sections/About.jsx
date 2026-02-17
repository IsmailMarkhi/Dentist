export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200"
            alt="Dental team"
            className="rounded-3xl shadow-2xl"
          />

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-2xl font-bold text-blue-600">15+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Trusted Dental Care
            <span className="block text-blue-600">
              For You & Your Family
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our clinic combines advanced technology with experienced
            professionals to deliver comfortable, safe, and effective
            treatments tailored to every patient.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Certified Specialists</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Modern Equipment</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Personalized Care</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Friendly Environment</p>
            </div>

          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Book Consultation
          </a>

        </div>

      </div>

    </section>
  );
}
