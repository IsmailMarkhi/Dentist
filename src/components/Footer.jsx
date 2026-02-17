export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <p className="text-sm">
          © {year} DentalCare Clinic. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
