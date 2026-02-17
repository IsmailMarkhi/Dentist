export default function Hero() {
  return (
    <section className="h-screen relative flex items-center text-white">

      <img
        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Dental clinic interior"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold">
          Professional Dental Care
        </h1>

        <p className="mt-4 max-w-xl">
          Modern treatments, experienced dentists,
          and a comfortable environment.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 bg-emerald-500 px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition"
        >
          Book Appointment
        </a>
      </div>

    </section>
  );
}
