export default function Services() {
  const items = [
    {
      name: "Implants",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Whitening",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Orthodontics",
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Cleaning",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-slate-800 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Services
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {items.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="w-full h-40 object-cover"
            />

            {/* TITLE */}
            <p className="p-4 font-medium text-gray-800 dark:text-gray-200">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
