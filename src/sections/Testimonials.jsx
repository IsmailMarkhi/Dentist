import { useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      name: "Sara M.",
      text: "Excellent service and very friendly staff.",
      role: "Patient",
      rating: 5,
      time: new Date().toLocaleDateString(),
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
      time: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", text: "", rating: 0 });
  };

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-br from-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — RATING */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900">
              Patient Reviews
            </h2>

            <div className="mt-6 flex items-center gap-6">
              <span className="text-6xl font-bold text-emerald-600">
                {avgRating.toFixed(1)}
              </span>

              <div>
                <div className="text-yellow-400 text-xl">
                  {"★".repeat(Math.round(avgRating))}
                </div>
                <p className="text-gray-500 text-sm">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 bg-white p-8 rounded-3xl shadow-lg space-y-4"
            >
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                placeholder="Write your review"
                value={form.text}
                onChange={(e) =>
                  setForm({ ...form, text: e.target.value })
                }
                className="w-full border rounded-xl px-4 py-3"
                rows="3"
              />

              {/* STARS */}
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

              <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
                Submit Review
              </button>
            </form>
          </div>

          {/* RIGHT — REVIEWS */}
          <div className="space-y-6">

            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow flex gap-4"
              >
                {/* AVATAR */}
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">
                      {r.name}
                    </p>
                    <span className="text-xs text-gray-400">
                      {r.time}
                    </span>
                  </div>

                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(r.rating)}
                  </div>

                  <p className="mt-2 text-gray-600">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
