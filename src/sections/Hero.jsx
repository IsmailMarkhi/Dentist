import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600"
        alt="Dental clinic"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl"
        >
          Experience Premium
          <span className="block text-emerald-400">
            Dental Care
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-200 max-w-xl"
        >
          Advanced technology, expert dentists, and a comfortable
          environment designed for your confidence and long-term oral health.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="bg-emerald-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 transition"
          >
            Book Appointment
          </a>

          <a
            href="tel:+212600000000"
            className="border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Call Now
          </a>
        </motion.div>

        {/* TRUST BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-14 flex flex-wrap gap-10 text-sm text-gray-300"
        >
          <span>⭐ 4.9 Patient Rating</span>
          <span>👨‍⚕️ 15+ Years Experience</span>
          <span>✔ 12K+ Successful Treatments</span>
        </motion.div>

      </div>

    </section>
  );
}
