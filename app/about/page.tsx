export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/aboutus.jpg"
          alt="PLS Construction Materials Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* Your Existing Section (unchanged) */}
      <section className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              PLS Construction Materials
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed text-center">
            <p>
              PLS Construction Materials is committed to supplying reliable and
              high-quality construction materials for strong and durable
              structures.We believe that proper maintenance of materials is the first rule of
              quality construction, ensuring safety and long-lasting performance.
            </p>

            <p>
              With trusted products and branches in
              <span className="font-semibold text-white"> Kisan Nagar </span>
              and
              <span className="font-semibold text-white"> Allipuram</span>, we
              proudly support builders, contractors, and customers with dependable
              service and timely delivery.
            </p>
          </div>

          {/* Tagline */}
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
              Strong materials. Trusted service. Solid foundations.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}