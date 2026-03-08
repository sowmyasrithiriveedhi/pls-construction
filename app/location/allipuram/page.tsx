export default function AllipuramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/location-hero.jpg"
          alt="Allipuram Location"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Allipuram
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          {/* Google Map */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5532.924266602611!2d80.03964266772302!3d14.452963356902691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1772973945241!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pt-4 flex-wrap">

            {/* Directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=14.452963,80.039642"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Directions
            </a>

            {/* Call */}
            <a
              href="tel:+919876543210"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hello%20I%20want%20information%20about%20construction%20materials"
              target="_blank"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </section>
    </>
  );
}