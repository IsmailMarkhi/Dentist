export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600">
          DentalCare
        </h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Reviews</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </a>

      </nav>
    </header>
  );
}
