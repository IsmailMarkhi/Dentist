export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-slate-900 to-emerald-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold leading-tight">
            Book Your Visit
            <span className="block text-emerald-400">
              Start Your Smile Journey
            </span>
          </h2>

          <p className="mt-6 text-gray-300">
            Contact us today to schedule your appointment. Our team is ready
            to provide comfortable, professional care tailored to you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — CONTACT CARD */}
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 space-y-6">

            <div>
              <p className="text-emerald-400 text-sm">Phone</p>
              <p className="text-xl font-semibold">+212 7 73 32 06 73</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Email</p>
              <p className="text-xl font-semibold">info@dentalcare.com</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Location</p>
              <p className="text-xl font-semibold">Rabat, Morocco</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Working Hours</p>
              <p className="text-xl font-semibold">
                Mon — Sat: 9AM — 7PM
              </p>
            </div>

            <a
              href="https://wa.me/212773320673"
              className="inline-block mt-4 bg-emerald-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT — FORM */}
          <form className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl space-y-6">

            <h3 className="text-2xl font-bold">
              Request an Appointment
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
              rows="4"
              placeholder="Describe your request"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
