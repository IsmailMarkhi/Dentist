export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TEXT */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Advanced Dental Care
            <span className="block text-emerald-600">
              Built on Trust & Experience
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our clinic combines cutting-edge technology with a compassionate
            approach to ensure every patient receives comfortable,
            personalized, and high-quality treatment.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-16 grid lg:grid-cols-3 gap-10 items-start">

          {/* IMAGE */}
          <div className="lg:col-span-2 relative">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200"
              alt="Dental clinic"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* SIDE CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">

            <div>
              <p className="text-3xl font-bold text-emerald-600">15+</p>
              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-emerald-600">12K+</p>
              <p className="text-gray-500">Happy Patients</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-emerald-600">98%</p>
              <p className="text-gray-500">Satisfaction Rate</p>
            </div>

            <a
              href="#contact"
              className="block text-center mt-4 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Book Appointment
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
