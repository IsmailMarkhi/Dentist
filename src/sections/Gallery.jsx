export default function Gallery() {
  const imgs = ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg"];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900 text-center">

      <h2 className="text-4xl font-bold">Our Clinic</h2>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {imgs.map((src, i) => (
          <img key={i} src={src} className="rounded-xl shadow" />
        ))}
      </div>

    </section>
  );
}
