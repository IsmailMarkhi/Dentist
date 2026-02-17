import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition"
        >
          DentalCare
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">

          <li>
            <a href="#services" className="hover:text-emerald-600 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-emerald-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-emerald-600 transition">
              Reviews
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-emerald-600 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
        >
          Book Now
        </a>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-3 md:hidden">

          {/* CALL BUTTON */}
          <a
            href="tel:+212773320673"
            className="p-2 rounded-lg bg-emerald-600 text-white"
            aria-label="Call"
          >
            <Phone size={20} />
          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-6 space-y-4 font-medium text-gray-700">

            <li>
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={() => setOpen(false)}>
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-emerald-600 text-white px-5 py-3 rounded-lg text-center font-semibold"
            >
              Book Appointment
            </a>

          </ul>
        </div>
      )}
    </header>
  );
}
