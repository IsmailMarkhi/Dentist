export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">

      <nav className="max-w-7xl mx-auto mt-4 px-6 py-3 flex items-center justify-between
                      bg-white/80 backdrop-blur-xl border border-gray-200
                      rounded-2xl shadow-lg">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
            D
          </span>
          <span className="text-xl font-semibold text-gray-900">
            DentalCare
          </span>
        </a>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
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

        {/* CTA */}
        <a
          href="#contact"
          className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold
                     shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
        >
          Book Appointment
        </a>

      </nav>

    </header>
  );
}
