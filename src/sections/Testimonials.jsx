import { useState } from "react";

export default function Testimonials() {

  const [reviews, setReviews] = useState([
    {
      name: "Sara M.",
      text: "Excellent service and very friendly staff.",
      role: "Patient",
      rating: 5,
      time: new Date().toLocaleString(),
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.text || form.rating === 0) return;

    const newReview = {
      name: form.name,
      text: form.text,
      role: "Patient",
      rating: form.rating,
      time: new Date().toLocaleString(),
    };

    setReviews([newReview, ...reviews]);

    setForm({ name: "", text: "", rating: 0 });
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900">
          Patient Reviews
        </h2>

        {/* ===== FORM ===== */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white p-6 rounded-2xl shadow max-w-xl mx-auto space-y-4 text-left"
        >
          {/* NAME */}
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* REVIEW */}
          <textarea
            placeholder="Write your review..."
            value={form.text}
            onChange={(e) =>
              setForm({ ...form, text: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-3"
            rows="3"
          />

          {/* ⭐ STAR SELECTOR */}
          <div className="flex gap-2 text-2xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() =>
                  setForm({ ...form, rating: star })
                }
                className={
                  star <= form.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>

        {/* ===== REVIEWS ===== */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow text-left"
            >
              {/* STARS */}
              <div className="text-yellow-400 mb-4">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>

              {/* TEXT */}
              <p className="text-gray-600">
                "{r.text}"
              </p>

              {/* USER + TIME */}
              <div className="mt-6 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-gray-900">
                    {r.name}
                  </p>
                  <p className="text-gray-500">
                    {r.role}
                  </p>
                </div>

                <span className="text-gray-400">
                  {r.time}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
