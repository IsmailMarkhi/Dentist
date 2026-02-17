export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            DentalCare
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Providing modern dental treatments with advanced technology
            and a caring team focused on your comfort and long-term oral health.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-6">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.75 3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10z" />
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.55 2.34 1.1 2.9.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0112 6.8c.85.01 1.7.12 2.5.36 1.9-1.32 2.74-1.04 2.74-1.04.55 1.43.2 2.49.1 2.75.64.71 1.02 1.62 1.02 2.74 0 3.93-2.34 4.79-4.57 5.04.36.32.68.95.68 1.92v2.84c0 .27.16.59.67.48A10.27 10.27 0 0022 12.26C22 6.59 17.52 2 12 2z" />
              </svg>
            </a>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Contact
          </h4>

          <ul className="mt-4 space-y-3">
            <li>📞 +212 6 00 00 00 00</li>
            <li>✉️ info@dentalcare.com</li>
            <li>📍 Rabat, Morocco</li>
            <li>🕒 Mon — Sat: 9AM — 7PM</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Book Appointment
          </h4>

          <p className="mt-4 text-gray-400">
            Contact us today to schedule your visit and start your journey
            toward a healthier smile.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Book Now
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {year} DentalCare Clinic — All rights reserved.
      </div>

    </footer>
  );
}
