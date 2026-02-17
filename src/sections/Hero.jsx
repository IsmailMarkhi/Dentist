import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24 lg:py-32 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Modern Dental Care
            <span className="block text-blue-600">
              For a Healthy Smile
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Advanced treatments, experienced specialists, and a comfortable
            environment designed for your long-term oral health.
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
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
            >
              Book Appointment
            </a>

            <a
              href="tel:+212600000000"
              className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition"
            >
              Call Now
            </a>
          </motion.div>

          {/* TRUST */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-8 text-sm text-gray-500"
          >
            <span>⭐ 4.9 Rating</span>
            <span>👨‍⚕️ 15+ Years Experience</span>
            <span>✔ 12,000+ Happy Patients</span>
          </motion.div>

        </div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200"
            alt="Dentist with patient"
            className="rounded-3xl shadow-2xl"
          />

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-2xl font-bold text-blue-600">15+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
