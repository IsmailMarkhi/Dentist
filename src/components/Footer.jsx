import { Instagram, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            DentalCare
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Providing modern dental treatments with advanced technology
            and a caring team focused on your comfort and long-term oral health.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://instagram.com/your_clinic"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-emerald-600 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white/10 hover:bg-emerald-600 transition"
            >
              <Github size={20} />
            </a>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Contact
          </h4>

          <ul className="mt-4 space-y-3 text-gray-400">

            <li>
              📞{" "}
              <a
                href="tel:+212600000000"
                className="hover:text-white transition"
              >
                +212 6 00 00 00 00
              </a>
            </li>

            <li>
              ✉️{" "}
              <a
                href="mailto:info@dentalcare.com"
                className="hover:text-white transition"
              >
                info@dentalcare.com
              </a>
            </li>

            <li>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=Rabat,Morocco"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Rabat, Morocco
              </a>
            </li>

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
            className="inline-block mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
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
