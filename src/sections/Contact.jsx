import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">

        {/* INFO */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Schedule your visit or contact us directly. Our team will
            respond as soon as possible.
          </p>

          {/* PHONE */}
          <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <Phone className="text-emerald-600" />
            <a
              href="tel:+212773320673"
              className="hover:text-emerald-600 transition"
            >
              +212 7 73 32 06 73
            </a>
          </p>

          {/* EMAIL */}
          <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <Mail className="text-emerald-600" />
            <a
              href="mailto:info@dentalcare.com"
              className="hover:text-emerald-600 transition"
            >
              info@dentalcare.com
            </a>
          </p>

          {/* ADDRESS */}
          <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <MapPin className="text-emerald-600" />
            <a
              href="https://www.google.com/maps?q=Rabat,Morocco"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 transition"
            >
              Rabat, Morocco
            </a>
          </p>

          {/* HOURS */}
          <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
            <Clock className="text-emerald-600" />
            Mon — Sat: 9AM — 7PM
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <a
              href="tel:+212773320673"
              className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-emerald-700 transition w-full sm:w-auto"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/212773320673"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-green-600 transition w-full sm:w-auto"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* GOOGLE MAP */}
        <iframe
          src="https://www.google.com/maps?q=Rabat,Morocco&output=embed"
          className="w-full h-80 sm:h-96 rounded-2xl shadow"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dental clinic location"
        ></iframe>

      </div>
    </section>
  );
}
