export default function ColumnBoxesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/materials/column-boxes.jpg"
          alt="Column Boxes"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Column Boxes
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">

          <p className="text-gray-200 text-lg">
            Column boxes are used in construction to support concrete
            columns during casting. They provide strong structural
            alignment and durability for vertical construction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/materials/column1.jpg"
              className="rounded-lg shadow-lg hover:scale-110 transition duration-300"
            />

            <img
              src="/materials/column2.jpg"
              className="rounded-lg shadow-lg hover:scale-110 transition duration-300"
            />

            <img
              src="/materials/column3.jpg"
              className="rounded-lg shadow-lg hover:scale-110 transition duration-300"
            />

          </div>

        </div>
      </section>
    </>
  );
}