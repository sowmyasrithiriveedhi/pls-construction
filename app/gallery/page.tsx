export default function GalleryPage() {
  const materials = [
    {
      image: "/gallery/slab1.jpg",
      name: "Slab & Beam Shuttering",
    },
    {
      image: "/gallery/column1.jpg",
      name: "Column Shuttering",
    },
    {
      image: "/gallery/slab2.jpg",
      name: "Slab & Beam Shuttering",
    },
    {
      image: "/gallery/column2.jpg",
      name: "Column Shuttering",
    },
    {
      image: "/gallery/column3.jpg",
      name: "Column Shuttering",
    },
    {
      image: "/gallery/wall1.jpg",
      name: "Retaining Wall",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/gallery-hero.jpg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {materials.map((item, index) => (
            <div key={index} className="space-y-4">

              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg shadow-lg w-full h-[250px] object-cover hover:scale-105 transition duration-300"
              />

              <p className="text-white text-lg font-semibold">
                {item.name}
              </p>

            </div>
          ))}

        </div>
      </section>
    </>
  );
}