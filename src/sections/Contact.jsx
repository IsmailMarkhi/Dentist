export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Book Your Appointment
          </h2>

          <p className="mt-4 text-gray-600">
            Schedule your visit or contact us directly. Our team will respond
            as soon as possible.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-lg font-semibold">+212 6 00 00 00 00</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-semibold">info@dentalcare.com</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="text-lg font-semibold">
                Rabat, Morocco
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Working Hours</p>
              <p className="text-lg font-semibold">
                Mon — Sat: 9:00 AM — 7:00 PM
              </p>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/212773320673"
              className="inline-block mt-6 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* FORM */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+212..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your request"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
